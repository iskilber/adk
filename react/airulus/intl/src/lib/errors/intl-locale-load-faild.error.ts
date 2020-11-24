export class AirulusIntlLocaleLoadFailedError extends Error {
  constructor(
    public readonly locale: string,
    public readonly url: string
  ) {
    super(`[Airulus Intl] loading locale dictionary for ${locale} failed from ${url}`);
  }
}