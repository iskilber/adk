import {
  Observable,
  of
  } from 'rxjs';
import {
  HttpRequestInterceptor,
  HttpRequestOpts
  } from './http-client.types';
import {
  handleRequest,
  handleResponseStatus,
  handleRetryStrategies,
  parseResponseBody,
  resolveHttpResponseValue,
  scanInterceptors
  } from './http-request.operators';
import { HttpResponse } from './http-response';

export class HttpRequest<D = any> {
  constructor(
    public readonly url: URL,
    public readonly headers: Headers,
    public readonly requestOptions: HttpRequestOpts,
    public readonly body?: BodyInit
  ) {}

  public get interceptors(): HttpRequestInterceptor[] {
    return this.requestOptions.requestInterceptors || [];
  }

  public exec(): Observable<D> {
    return of(this).pipe(
      // 1.6 Go over interceptors
      scanInterceptors<HttpRequest<D>>((request) => request.interceptors),
      // 2. Build and send request
      handleRequest(),
      // 3: RESPONSE
      // 3.2 Buffer response body and parse it
      parseResponseBody(),
      // 3.3 Write request/response stats

      // 3.4 Run interceptors over http result
      // 3.5 Process response interceptors
      scanInterceptors<HttpResponse<D>>((response) => response.interceptors),
      // 3.5 Handle response status, if unexpected, throw error
      handleResponseStatus(),
      // 3.4 Resolve value
      resolveHttpResponseValue(),
      // 4. error handlng
      // 4.1 Retry strategies
      handleRetryStrategies(this.requestOptions.retry)
    );
  }

  public toRequestInit(): RequestInit {
    return {
      body: this.body,
      headers: this.headers,
      cache: this.requestOptions.cache,
      credentials: this.requestOptions.credentials,
      integrity: this.requestOptions.integrity,
      keepalive: this.requestOptions.keepalive,
      mode: this.requestOptions.mode,
      method: this.requestOptions.method,
      redirect: this.requestOptions.redirect,
      referrer: this.requestOptions.referrer,
      referrerPolicy: this.requestOptions.referrerPolicy,
      signal: this.requestOptions.signal,
      window: this.requestOptions.window
    }
  }

  public toRequest(): Request {
    const requestUrl = this.url.toString();
    const requestInit = this.toRequestInit();
    const request = new Request(requestUrl, requestInit);

    return request;
  }
}