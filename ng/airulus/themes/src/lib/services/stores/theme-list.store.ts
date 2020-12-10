import { Injectable } from '@angular/core';
import { ITheme } from '../../interfaces';
import { IThemeList } from '../../interfaces';
import {
  Store,
  StoreConfig
  } from '@datorama/akita';

@Injectable()
@StoreConfig({ name: 'airulus.themeList '})
export class ThemeListStore extends Store<IThemeList> {
  constructor() {
    super({});
  }
}
