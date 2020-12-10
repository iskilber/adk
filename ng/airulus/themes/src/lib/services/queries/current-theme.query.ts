import { CurrentThemeStore } from '../stores';
import { Injectable } from '@angular/core';
import { ITheme } from '../../interfaces';
import { Observable } from 'rxjs';
import { Query } from '@datorama/akita';

@Injectable()
export class CurrentThemeQuery extends Query<ITheme> {

  public theme$: Observable<ITheme> = this.select();

  constructor(protected store: CurrentThemeStore) {
    super(store);
  }

  public get theme() {
    return this.getValue();
  }

  public get className() {
    return this.theme.cssClassName;
  }
}
