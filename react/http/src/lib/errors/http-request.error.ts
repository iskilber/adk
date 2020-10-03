import { HttpRequest } from '../http-request';

export class HttpRequestError extends Error {
  constructor(
    public readonly request: HttpRequest, 
    public readonly origError: any
  ) {
    super(origError && origError.message ? origError.message : 'Http request failed!');
  }
}
