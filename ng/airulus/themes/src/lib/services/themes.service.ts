import {
  catchError,
  finalize,
  tap
  } from 'rxjs/operators';
import {
  CurrentThemeQuery,
  ThemeListQuery
  } from './queries';
import {
  CurrentThemeStore,
  ThemeListStore
  } from './stores';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IThemeList } from '../interfaces';
import { throwError } from 'rxjs';

@Injectable()
export class ThemesService {

  public list$ = this.themeListQuery.list$;

  public currentTheme$ = this.currentThemeQuery.theme$;

  constructor(
    public readonly themeListQuery: ThemeListQuery,
    public readonly themeListStore: ThemeListStore,
    public readonly currentThemeStore: CurrentThemeStore,
    public readonly currentThemeQuery: CurrentThemeQuery,
    private http: HttpClient
  ) {}

  public get currentThemeClassName() {
    return this.currentThemeQuery.className;
  }

  public load(themeListUrl: string): Promise<IThemeList> {
    this.themeListStore.setLoading(true);

    return this.http.get<IThemeList>(themeListUrl)
      .pipe(
        tap((themeList) => this.themeListStore.update(themeList)),
        catchError((error) => {
          this.themeListStore.setError(error);
          return throwError(error);
        }),
        finalize(() => this.themeListStore.setLoading(false)))
      .toPromise();
  }

  public setCurrentTheme(themeName: string) {
    const currentTheme = this.themeListStore.getValue().items
        .find((theme) => theme.name === themeName);

    this.currentThemeStore.setTheme(currentTheme);
  }
}
