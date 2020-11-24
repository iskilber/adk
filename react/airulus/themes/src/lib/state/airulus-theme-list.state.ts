import { BehaviorSubject } from 'rxjs';
import {
  distinctUntilChanged,
  pluck
  } from 'rxjs/operators';
import { IAirulusTheme } from '../model';

export interface IAirulusThemeListState {
  currentThemeClassName: string;
  themes: IAirulusTheme[];
}

export class AirulusThemeListState extends BehaviorSubject<IAirulusThemeListState> {

  public themes$ = this.pipe(
    pluck('themes'), 
    distinctUntilChanged());

  public currentThemeClassName$ = this.pipe(
    pluck('currentThemeClassName'),
    distinctUntilChanged());

  constructor(init: IAirulusThemeListState) {
    super(init);
  }

  public get currentThemeClassName(): string {
    return this.getValue().currentThemeClassName;
  }

  public getTheme(themeName) {
    return this.getValue().themes.find((theme) => theme.name === themeName);
  }

  public switchCurrentTheme(nextThemeClassName: string) {
    this.next({
      ...this.getValue(),
      currentThemeClassName: nextThemeClassName
    });
  }
}