export class HttpInvalidUrlStringError extends Error {
  constructor(
    public readonly url: string,
    public readonly origError: any
  ) {
    super(
      `Http request cannot parsed url: {$url}`
    );
  }
}
