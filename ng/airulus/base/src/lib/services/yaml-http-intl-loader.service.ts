import * as yaml from 'js-yaml';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';

export class YamlHttpIntlLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    public prefix: string = '/assets/intl/',
    public suffix: string = '.yaml'
  ) {}

  public getTranslation(lang: string): Observable<Object> {
    return this.http
      .get(
        `${this.prefix}${lang}${this.suffix}`, 
        { responseType: 'text' })
      .pipe(
        map((value: string) => yaml.safeLoad(value)))
  }
}
