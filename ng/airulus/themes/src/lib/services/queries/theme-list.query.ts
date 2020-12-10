import { Injectable } from '@angular/core';
import {
  ITheme,
  IThemeList
  } from '../../interfaces';
import { Observable } from 'rxjs';
import { Query } from '@datorama/akita';
import { ThemeListStore } from '../stores';

@Injectable()
export class ThemeListQuery extends Query<IThemeList> {

  public list$: Observable<IThemeList> = this.select();

  public themes$: Observable<ITheme[]> = this.select((state) => state.items);

  public default$: Observable<ITheme> = this.select((state) => {
    const defaultThemeName = state.default;

    return state.items.find((theme) => theme.name === defaultThemeName)
  });

  constructor(protected store: ThemeListStore) {
    super(store);
  }
}