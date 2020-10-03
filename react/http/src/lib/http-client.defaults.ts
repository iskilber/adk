import {
  HttpClientDefaults,
  HttpResponseParserType,
  UrlSearchParamsInit
  } from './http-client.types';
import {
  HttpInvalidRequestParamError,
  HttpInvalidUrlStringError
  } from './errors';
import {
  HttpMethod,
  HttpResponseBodyType
  } from './model';

// HTTP REQUEST URL BUILDER ====================================================

export function parseUrlTemplate(
  urlTpl: string,
  params: Record<string, any> = {}
): string {
  let currentParamName: string;
  try {
    return Reflect.ownKeys(params).reduce<string>(
      (tpl: string, name: string) => {
        currentParamName = name;
        const value = Array.isArray(params[name]) ?
            params[name].join(',') :
            String(params[name]);
        return tpl.replace(new RegExp(`:${name}`, 'g'), value);
      },
      urlTpl);
  } catch (error) {
    throw new HttpInvalidRequestParamError(currentParamName, error);
  }
}

function convertToUrlObject(urlStr: string, base: string = location.origin): URL {
  try {
    return new URL(urlStr, base);
  } catch (error) {
    console.log(error);
    throw new HttpInvalidUrlStringError(urlStr, error);
  }
}

function appendSearchParams(url: URL, search?: UrlSearchParamsInit): URL {
  if (!search) { return url; }

  const searchParams = new URLSearchParams(search);

  searchParams.forEach((paramValue, paramName) => {
    url.searchParams.set(paramName, paramValue);
  });

  return url;
}

/**
 * Metohds build url by those steps:
 *
 *  1: replace all placeholders in url template string by params
 *  2: parse url string into URL object
 *  3: append url search params
 *
 * @param urlStr
 * @param search
 * @param params
 */
export function buildRequestUrl(
  urlTpl: string,
  search?: UrlSearchParamsInit,
  params: Record<string, any> = {},
  base?: string
): URL {
  // 1: Replace all placeholders by params
  const urlStr = parseUrlTemplate(urlTpl, params);
  // 2: build URL object
  const url = convertToUrlObject(urlStr, base);
  // 3: appdend search params
  const urlWithSearch = appendSearchParams(url, search);

  return urlWithSearch;
}

// HTTP REQUEST NATIVE FETCH HANDLER ===========================================
export function handleRequestByFetch(request: Request): Promise<Response> {
  return fetch(request);
}

// HTTP REQUEST CONTENT TYPE HANDLER ===========================================
export function resolveRequestContentType(body: any): string | null {
  if (typeof Blob !== 'undefined' && body instanceof Blob) {
    // Blobs usually can have their onw MIME type.
    return body.type || null;
  } else if (typeof body === 'string') {
    return 'text/plain';
  } else if (
    typeof URLSearchParams !== 'undefined' &&
    body instanceof URLSearchParams
  ) {
    return 'application/x-www-form-urlencoded;charset=UTF-8';
  } else if (body instanceof FormData) {
    // body typeOf FormData content type is handled by browser, because
    // there has to be form data boundaries set by browser
    return null;
  } else if (
    typeof body === 'object' && body != null ||
    typeof body === 'number' ||
    Array.isArray(body)
  ) {
    return 'application/json'
  } else {
    // body type
    return null;
  }
}

// HTTP REQUEST BODY SERIALIZE HANDLER =========================================
export function serializeBody(body: any): BodyInit {
  // No body on request
  if (body === null || body === undefined) {
    return null;
  }
  // Already serialized into BodyInit
  else if (
    body instanceof ReadableStream ||
    body instanceof ArrayBuffer ||
    body instanceof Blob ||
    body instanceof FormData ||
    body instanceof URLSearchParams ||
    typeof body === 'string'
  ) {
    return body
  } else if (
    typeof body === 'object' ||
    typeof body === 'boolean' ||
    Array.isArray(body)
  ) {
    return JSON.stringify(body);
  } else {
    return String(body);
  }
}

// HTTP REQUEST DEFAULTS =======================================================
export const HTTP_CLIENT_DEFAULTS: Partial<HttpClientDefaults> = {
  method: HttpMethod.GET,
  buildRequestUrl: buildRequestUrl,
  resoleRequestContentType: resolveRequestContentType,
  serializeBody: serializeBody,
  requestInterceptors: [],
  responseInterceptors: [],
  handleRequest: handleRequestByFetch,
  acceptableStatuses: (statusCode) => statusCode < 400,
  responseBodyType: HttpResponseBodyType.JSON,
  parseResult: HttpResponseParserType.DATA
}
