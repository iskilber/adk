import {
  AirulusIntlLocaleConfigNotFoundError,
  AirulusIntlLocaleLoadFailedError
  } from '../errors';
import { BehaviorSubject } from 'rxjs';
import {
  distinctUntilChanged,
  pluck,
  shareReplay
  } from 'rxjs/operators';
import { IAirulusIntlOptionsEntry } from '../model';

export interface IAirulusIntlState {
  locales: IAirulusIntlOptionsEntry[];
  currentMessages: { [key: string]: string };
  currentLocale: string;
  pending: boolean;
  error?: any;
}

export class AirulusIntlState extends BehaviorSubject<IAirulusIntlState> {

  public intlError$ = this.pipe(
    pluck('error'),
    distinctUntilChanged(),
    shareReplay(1));

  constructor(locales: IAirulusIntlOptionsEntry[]) {
    super({
      locales,
      currentMessages: null,
      currentLocale: null,
      pending: false,
      error: null
    });
  }

  public get intlError() {
    return this.getValue().error;
  }

  public set currentLocale(locale: string) {
    const currentLocaleConfig = this.getValue().locales
        .find((config) => config.locale === locale);

    if (!currentLocaleConfig) {
      this.patch({
        error: new AirulusIntlLocaleConfigNotFoundError(locale)
      })
    } else {
      this.patch({
        currentLocale: locale,
        pending: true,
        error: null
      })
      
      fetch(currentLocaleConfig.url)
          .then((response: Response) => response.json())
          .then((currentMessages) => this.patch({
            currentMessages: currentMessages,
            pending: false,
            error: null
          }))
          .catch((error) => this.patch({
            currentMessages: null,
            pending: false,
            error: new AirulusIntlLocaleLoadFailedError(
                currentLocaleConfig.locale,
                currentLocaleConfig.url)
          }));
    }
  }

  public patch(patch: Partial<IAirulusIntlState>) {
    this.next({
      ...this.getValue(),
      ...patch
    });
  }
}