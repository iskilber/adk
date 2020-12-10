import { HTTP_RACOON_CACHE_HEADER } from './http-cache.consts';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  of
  } from 'rxjs';
import { RacoonHttpCacheService } from './http-cache.service';
import {
  share,
  tap
  } from 'rxjs/operators';

/**
 * Raccon watch for requests with those headers: 'x-racoon-cache'. As value
 * a TTL is expected. Racoon caches only GET requests. If ttl is 0, then 
 * request will be removed from cache.
 *
 */
@Injectable()
export class RacoonHttpCacheInterceptor implements HttpInterceptor {

  constructor(
    private cache: RacoonHttpCacheService
  ) {}

  public intercept(
    httpRequest: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cacheKey = httpRequest.urlWithParams;
    const cacheTTL = parseInt(httpRequest.headers.get(HTTP_RACOON_CACHE_HEADER), 10)

    if (httpRequest.method !== 'GET' || isNaN(cacheTTL)) {
      return next.handle(httpRequest);
    }
    if (cacheTTL === 0) {
      this.cache.delete(cacheKey);
    }
    const cachedResponse = this.cache.get(cacheKey);

    if (cachedResponse) {
      return (cachedResponse instanceof Observable) ?
        cachedResponse : of(cachedResponse.clone());
    } else {
      const requestHandler = next.handle(httpRequest).pipe(
        tap((stateEvent) => {
          if (stateEvent instanceof HttpResponse) {
            this.cache.set(cacheKey, cacheTTL, stateEvent.clone());
          }
        }),
        share());  
      // Cache pending request until response gets resolved in order
      // to provent parallel request.
      this.cache.set(cacheKey, cacheTTL, requestHandler);

      return requestHandler;
    }
  }
}