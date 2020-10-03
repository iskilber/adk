import { HttpRequest } from './http-request';
import {
  HttpRequestOpts,
  HttpRequestRetryStrategy,
  HttpResolveAcceptableStatus,
  HttpResponseInterceptor,
  HttpResponseParser,
  HttpResponseParserType
  } from './http-client.types';
import { HttpResponseBodyType } from './model';


export class HttpResponse<D = any> {

  public data: D;

  public stats: any;

  private opts: HttpRequestOpts;

  constructor(
    public readonly request: HttpRequest,
    public readonly response: Response
  ) {
    this.opts = request.requestOptions;
  }

  public get url(): string {
    return this.request.url.toString();
  }

  public get status(): number {
    return this.response.status;
  }

  public get interceptors(): HttpResponseInterceptor[] {
    return this.opts.responseInterceptors || [];
  }

  public get retryStrategy(): number | HttpRequestRetryStrategy {
    return this.opts.retry;
  }

  public get parser(): HttpResponseParserType | HttpResponseParser {
    return this.opts.parseResult;
  }

  public get acceptableStatuses(): HttpResolveAcceptableStatus | number[] {
    return this.opts.acceptableStatuses;
  }

  public isAcceptable() {
    const acceptableStatuses = this.acceptableStatuses;
    const status = this.status;

    return Array.isArray(acceptableStatuses) ?
        acceptableStatuses.includes(status) :
        acceptableStatuses(status, this);
  }

  public async parseResponseBody(): Promise<this> {
    const bodyType = this.opts.responseBodyType;
    switch (bodyType) {
      case HttpResponseBodyType.JSON:
        this.data = await this.response.json();
        break;
      case HttpResponseBodyType.FORM_DATA:
        this.data = await this.response.formData() as any;
        break;
      case HttpResponseBodyType.BLOB:
        this.data = await this.response.blob() as any;
        break;
      case HttpResponseBodyType.ARRAY_BUFFER:
        this.data = await this.response.arrayBuffer() as any;
        break;
      case HttpResponseBodyType.TEXT:
      default:
        this.data = await this.response.text() as any;
    }

    return this;
  }
}
