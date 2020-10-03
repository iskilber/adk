export class HttpInvalidRequestParamError extends Error {
  constructor(
    public readonly parameter: string,
    public readonly origError: any
  ) {
    super(
      `Http request parameter cannot be parsed: Invalid param value cought for "{${parameter}}" param`
    );
  }
}
