export enum HttpStatusCode {
  UNKNOWN = -1,
  // 1xx =======================================================================

  // 2xx =======================================================================

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200 */
  OK = 200,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201 */
  CREATED = 201,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202 */
  ACCEPTED = 202,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204 */
  NO_CONTENT = 204,

  // 3xx =======================================================================
  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304 */
  NOT_MODIFIED = 304,

  // 4xx =======================================================================
  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400 */
  BAD_REQUEST = 400,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401 */
  UNAUTHORIZED = 401,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403 */
  FORBIDDEN = 403,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404 */
  NOT_FOUND = 404,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405 */
  METHOD_NOT_ALLOWED = 405,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406 */
  NOT_ACCEPTABLE = 406,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407 */
  PROXY_AUTHENTICATION_REQUIRED = 407,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408 */
  REQUEST_TIMEOUT = 408,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408 */
  CONFLICT = 409,

  // 5xx =======================================================================
  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 */
  INTERNAL_SERVER_ERROR = 500,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501 */
  NOT_IMPLEMENTED = 501,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502 */
  BAD_GATEWAY = 502,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503 */
  SERVICE_UNAVAILABLE = 503,

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504 */
  GATEWAY_TIMEOUT = 504,
}
