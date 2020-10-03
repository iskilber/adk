import { HTTP_CLIENT_DEFAULTS } from './http-client.defaults';
import { HttpMethod } from './model';
import { HttpRequest } from './http-request';
import { Observable } from 'rxjs';
import {
  HttpClientDefaults,
  HttpRequestInterceptor,
  HttpRequestOpts,
  HttpResponseInterceptor,
  } from './http-client.types';
/**
 * Preset Http request factory.
 */
export class HttpClient {

  public static defaults = HTTP_CLIENT_DEFAULTS;

  public defaults: HttpClientDefaults;

  constructor(
    defaults: Partial<HttpClientDefaults> = {}
  ) {
    this.defaults = {
      ...HttpClient.defaults,
      // Make copy of an array!
      requestInterceptors: [...HttpClient.defaults.requestInterceptors],
      base: document.head.baseURI,
      ...defaults
    } as HttpClientDefaults;
  }

  public get headers(): Headers {
    return this.defaults.headers;
  }

  public getHeader(name: string): string | null {
    return this.defaults.headers ? 
        this.defaults.headers.get(name) :
        null;
  }

  public addRequestInterceptor(interceptor: HttpRequestInterceptor): this {
    if (!this.defaults.requestInterceptors) {
      this.defaults.requestInterceptors = [];
    }
    this.defaults.requestInterceptors.push(interceptor);

    return this;
  }

  public addResponseInterceptor(interceptor: HttpResponseInterceptor): this {
    if (!this.defaults.responseInterceptors) {
      this.defaults.responseInterceptors = [];
    }
    this.defaults.responseInterceptors.push(interceptor);

    return this;
  }

  public GET<D = any>(
    urlStr: string, 
    init: Partial<HttpRequestOpts> = {}
  ): Observable<D> {
    return this.request(urlStr, {...init, method: HttpMethod.GET}).exec();
  }

  public POST<D = any>(
    urlStr: string, 
    init: Partial<HttpRequestOpts> = {}
  ): Observable<D> {
    return this.request(urlStr, {...init, method: HttpMethod.POST}).exec();
  }

  public PUT<D = any>(
    urlStr: string, 
    init: Partial<HttpRequestOpts> = {}
  ): Observable<D> {
    return this.request(urlStr, {...init, method: HttpMethod.PUT}).exec();
  }

  public DELETE<D = any>(
    urlStr: string, 
    init: Partial<HttpRequestOpts> = {}
  ): Observable<D> {
    return this.request(urlStr, {...init, method: HttpMethod.DELETE}).exec();
  }

  public HEAD<D = any>(
    urlStr: string, 
    init: Partial<HttpRequestOpts> = {}
  ): Observable<D> {
    return this.request(urlStr, {...init, method: HttpMethod.HEAD}).exec();
  }

  public OPTIONS<D = any>(
    urlStr: string, 
    init: Partial<HttpRequestOpts> = {}
  ): Observable<D> {
    return this.request(urlStr, {...init, method: HttpMethod.OPTIONS}).exec();
  }

  public PATCH<D = any>(
    urlStr: string, 
    init: Partial<HttpRequestOpts> = {}
  ): Observable<D> {
    return this.request(urlStr, {...init, method: HttpMethod.PATCH}).exec();
  }

  public CONNECT<D = any>(
    urlStr: string, 
    init: Partial<HttpRequestOpts> = {}
  ): Observable<D> {
    return this.request(urlStr, {...init, method: HttpMethod.CONNECT}).exec();
  }

  /**
   * Build and execute 
   * @param urlStr 
   * @param init 
   */
  public request<D = any>(
    urlStr: string, 
    init: Partial<HttpRequestOpts> = {}
  ): HttpRequest<D> {
    // 1. Build HttpRequestInit
    const requestOptions: HttpRequestOpts = { ...this.defaults, ...init };
    // 1.1 Build Request URL
    const requestUrl = requestOptions.buildRequestUrl(
        urlStr, init.search, init.params, requestOptions.base);
    // 1.2 Build request headers
    const requestHeaders = this.mergeHeaders(init.headers);
    // 1.3 resolve content type
    const contentType = this.resolveConentType(requestHeaders, requestOptions);
    // 1.4 parse body
    const requestBody = 
        requestOptions.serializeBody(requestOptions.body, contentType);

    return new HttpRequest(
      requestUrl, 
      requestHeaders, 
      requestOptions, 
      requestBody);
  }

  private resolveConentType(
    headers: Headers, 
    options: HttpRequestOpts
  ): string {
    // 1 resolve content type from request init (higher priority)
    if (options.contentType) {
      headers.set('content-type', options.contentType);
    } 
    // 2 take content type from defaults
    else if (headers.has('content-type')) {
      // do nothing, conten-type already set
    } 
    // 3 try to guess content type from body
    else {
      const contentType = options.resoleRequestContentType(options.body);
      if (contentType) {
        headers.set('content-type', contentType);
      }
    }
    return headers.get('content-type');
  }

  private mergeHeaders(headersInit?: HeadersInit) {
    const requestHeaders = new Headers(headersInit);
    if (this.defaults.headers) {
      this.defaults.headers.forEach(
        (value, key) => {
          if (!requestHeaders.has(key)) {
            requestHeaders.set(key, value)
          }
        });
    }
    return requestHeaders;
  }
}