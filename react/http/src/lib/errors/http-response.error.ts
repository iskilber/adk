import { HttpResponse } from '../http-response';

export class HttpResponseError extends Error {

  constructor(public readonly response: HttpResponse<any>, message?: string) {
    super( message || `Http Request failed: "(${response.status}) ${response.url}"`);
  }

  public get status() {
    return this.response.status;
  }
}
