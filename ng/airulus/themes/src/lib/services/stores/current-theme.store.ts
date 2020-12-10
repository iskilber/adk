import { Injectable } from '@angular/core';
import { ITheme } from '../../interfaces';
import {
  Store,
  StoreConfig
  } from '@datorama/akita';

@Injectable()
@StoreConfig({ name: 'airulus.currentTheme' })
export class CurrentThemeStore extends Store<ITheme> {
  constructor() {
    super({});
  }

  public setTheme(theme: ITheme) {
    this.update(theme);
  }
}
