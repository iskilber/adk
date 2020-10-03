import {
  HttpMethod,
  HttpResponseBodyType
  } from './model';
import { HttpRequest } from './http-request';
import { HttpResponse } from './http-response';
import { Observable } from 'rxjs';

export interface HttpClientFetchInit {
  method?: string;
  search?: HttpClientSearchParams;
  params?: HttpClientPathParams;
  body?: any;
  bodyParser?: HttpRequestBodyParser;
  bodyContentType?: string;
  headers?: Record<string, string>;
}

export type HttpRequestBodyParser = (data: any) => BodyInit;

export interface HttpClientSearchParams {
  [key: string]: any;
}

export interface HttpClientPathParams {
  [key: string]: any;
}

export interface HttpClientFetchOpts {
  url: URL;
  method?: string;
  body?: BodyInit;
  bodyContentType?: string;
  requestBodyParsers?: {[contentType: string]: HttpRequestBodyParser };
  headers?: Headers;
}

export interface HttpClientFetchDefaults {
  method?: string;
  bodyContentType?: string;
  requestBodyParsers?: {[contentType: string]: HttpRequestBodyParser };
  methodsWithoutBody?: string[];
  headers?: Headers;
}

export type HttpGlobalFetch =
    (input: RequestInfo, init?: RequestInit) => Promise<Response>;

// ===================

export type UrlSearchParamsInit =
    string[][] | Record<string, string> | string | URLSearchParams;

export enum HttpResponseParserType {
  RESPONSE = 'response',
  DATA = 'data',
  STATS = 'stats',
  RESULTS = 'results'
}

export type HttpResponseParser<D = any, R = any> = (result: HttpResponse<D>) => R;

export type HttpRequestRetryStrategy =
  (errors: Observable<Error>) => Observable<any>;

export type HttpResolveAcceptableStatus =
  (status: number, reponse: HttpResponse) => boolean;

/**
 * Http client configuration object, which holds default settings
 * and strategies applaied when service builds a request or deals
 * with response.
 *
 * The http client defaults are set as static property to be
 * copied into each created instance of HttpClient. Each instance
 * then can override the default settings by its onw configuration.
 *
 * Also when single request is build the HttpRequestOpts can
 * affect or replace the instance settings for that specific
 * request.
 */
export interface HttpClientDefaults {
  /**
   * Method, which request will take if no method is specified by
   * HttpRequestOpts.
   */
  method?: HttpMethod;

  base?: string;

  /**
   * Strategy how to build an URL object.
   */
  buildRequestUrl: (
    url: string,
    search?: UrlSearchParamsInit,
    params?: Record<string, any>,
    base?: string 
  ) => URL;


  headers?: Headers;

  /**
   * Try to resolve MIME type of request body
   */
  resoleRequestContentType: (body: any) => string;

  /**
   * Converts delivered data structure into a body which
   * browser Request will accept.
   */
  serializeBody?: (body: any, contentType?: string) => BodyInit | null;

  requestInterceptors?: HttpRequestInterceptor[];

  responseInterceptors?: HttpResponseInterceptor[];

  handleRequest?: HttpRequestHandler;

  /**
   * Checks whether status is acceptable or whether trigger an error.
   */
  acceptableStatuses?: HttpResolveAcceptableStatus | number[];

  responseBodyType?: HttpResponseBodyType;

  /**
   * Specify value to be emitted on http request success.
   * It can be parsed data, or response, or request stats
   * or entire http result or any value resolved by
   * custom http result parser.
   */
  parseResult?: HttpResponseParserType | HttpResponseParser;
}

/**
 * Http request options when calling `HttpClient#request` method
 * to build a request.
 */
export interface HttpRequestOpts<DATA = any, RAW = any> extends HttpClientDefaults {
  search?: UrlSearchParamsInit;
  params?: Record<string, string>;
  /**
   * Allow/disallow the request to be sent with credentials.
   * Some request, specialy when dealing with CORPS should
   * avoid to append 'Authorization' header.
   */
  credetials?: RequestCredentials;

  contentType?: string;

  /**
   * Skip default body parsers and parse it by provided
   * callback.
   */
  parseRequestBody?: (body: any) => BodyInit | undefined;
  body?: any;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  integrity?: string;
  keepalive?: boolean;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  signal?: AbortSignal;
  window?: any;

  /**
   * Implementes specific strategy when and how to
   * repeat a request in case of failuer.
   *
   * ## Example:
   *
   * Attepts to repeat a request when failed for specific status
   * codes. Repeat attempts n-times and increase delay between.
   *
   * See `genericHttpRequestRetryStrategy` for implementation details.
   */
  retry?: HttpRequestRetryStrategy | number;
}

export type HttpInterceptor<T = any> = (payload: T) => T | Promise<T> | Observable<T>;

export type HttpRequestInterceptor = HttpInterceptor<HttpRequest>;

export type HttpResponseInterceptor = HttpInterceptor<HttpResponse>;

export type HttpRequestHandler = (request: Request) => Promise<Response>;

export interface HttpResult<D = any> {
  request: Request,
  response: Response,
  data?: D;
  stats?: any;
}
