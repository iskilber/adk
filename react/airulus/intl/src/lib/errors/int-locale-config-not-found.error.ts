export class AirulusIntlLocaleConfigNotFoundError extends Error {
  constructor(public readonly locale: string) {
    super(`[Airulus Intl]: Current locale config "${locale}" not found!`);
  }
}