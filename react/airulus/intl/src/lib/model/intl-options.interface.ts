export interface IAirulusIntlOptionsEntry {
  locale: string;
  url: string;
}

export interface IAirulusIntlOptions {
  entries: IAirulusIntlOptionsEntry[];
  defaultLocale: string;
}
