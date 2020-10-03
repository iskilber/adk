import {
  catchError,
  last,
  map,
  mergeScan,
  retry,
  retryWhen,
  switchMap,
  tap
  } from 'rxjs/operators';
import {
  from,
  MonoTypeOperatorFunction,
  Observable,
  of,
  throwError
  } from 'rxjs';
import {
  HttpInterceptor,
  HttpRequestRetryStrategy,
  HttpResponseParserType
  } from './http-client.types';
import { HttpRequest } from './http-request';
import {
  HttpRequestError,
  HttpResponseError
  } from './errors';
import { HttpResponse } from './http-response';

/**
 * HTTP Request process operators which handle request stream.
 */

function scanInterceptor<T>(payload: T, interceptor: HttpInterceptor<T>): Observable<T> {
  const result = interceptor(payload);

  if (result instanceof Observable) {
    return result;
  } else if (result instanceof Promise) {
    return from(result);
  } else {
    return of(result);
  }
}

export function scanInterceptors<T>(
  retrieveInterceptors: (payload: T) => HttpInterceptor[]
): MonoTypeOperatorFunction<T> {
  return (payload$: Observable<T>) => payload$.pipe(
    switchMap((payload: T) =>
      from(retrieveInterceptors(payload))
          .pipe(
            mergeScan(scanInterceptor, payload),
            last())));
}

export function handleRequest(): MonoTypeOperatorFunction<any> {
  return (request$: Observable<HttpRequest>) => request$.pipe<HttpResponse>(
    switchMap((httpRequest: HttpRequest) => {
      return from(httpRequest.requestOptions.handleRequest(httpRequest.toRequest()))
          .pipe(
            map((response) => (new HttpResponse(httpRequest, response))),
            catchError((error) =>
                throwError(new HttpRequestError(httpRequest, error))));
    }));
}

export function handleResponseStatus(): MonoTypeOperatorFunction<any> {
  return (result$: Observable<HttpResponse>) => result$.pipe(
    switchMap((response) => response.isAcceptable() ?
      of(response) :
      throwError(new HttpResponseError(response))
    ));
}

export function parseResponseBody(): MonoTypeOperatorFunction<any> {
  return (response$: Observable<HttpResponse>) => response$.pipe(
    switchMap((response) => from(response.parseResponseBody())));
}

export function handleRetryStrategies(
  retryStrategy: HttpRequestRetryStrategy | number
): MonoTypeOperatorFunction<any> {
  return (response$: Observable<HttpResponse>) => {
    if (!retryStrategy) {
      return response$;
    } else if (typeof retryStrategy === 'number') {
      return response$.pipe(retry(retryStrategy));
    } else {
      return response$.pipe(retryWhen(retryStrategy));
    }
  }
}

export function resolveHttpResponseValue(): MonoTypeOperatorFunction<any> {
  return (response$: Observable<HttpResponse>) => response$.pipe(
    map((response) => {
      const parse = response.parser;
      if (typeof parse === 'function') {
        return parse(response);
      } else {
        switch (parse) {
          case HttpResponseParserType.RESPONSE:
            return response.request;
          case HttpResponseParserType.STATS:
            return response.stats;
          case HttpResponseParserType.RESULTS:
            return response;
          case HttpResponseParserType.DATA:
          default:
            return response.data;
        }
      }
    })
  )
}
