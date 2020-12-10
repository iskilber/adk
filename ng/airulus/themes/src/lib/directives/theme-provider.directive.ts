import {
  Directive,
  ElementRef,
  Input,
  OnInit
  } from '@angular/core';
import { ITheme } from '../interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ThemesService } from '../services';

@Directive({
  selector: '[arlThemes]',
})
export class ThemesProviderDirective implements OnInit { 

  private themeLinkElement: HTMLLinkElement;

  private lastTheme: ITheme;

  @Input('arlThemes')
  public themesListUrl: string;

  constructor(
    private themes: ThemesService,
    private hostElement: ElementRef<HTMLElement>
  ) {}
  
  public ngOnInit() {
    this.themes.load(this.themesListUrl)
      .then((themeList) => this.themes.setCurrentTheme(themeList.default));

    this.themes.currentTheme$.subscribe((theme) => {
      if (!theme || !theme.name) { return; }
      this.loadTheme(theme);
    });
  }

  private loadTheme(theme: ITheme) {
    new Observable<HTMLLinkElement>((subscriber) => {
      const themeLinkElement = document.createElement('link');
      themeLinkElement.rel = 'stylesheet';
      themeLinkElement.addEventListener('load', () => {
        subscriber.next(themeLinkElement);
        subscriber.complete();
      });
      themeLinkElement.addEventListener('error', () => {
        subscriber.error(themeLinkElement);
      });
      themeLinkElement.href = theme.cssFileUrl;
      // Needs to append in order to trigger linked file download.
      document.head.appendChild(themeLinkElement);
    }).subscribe((themeLinkElement) => {
      const prevThemeClassName = this.lastTheme && this.lastTheme.cssClassName;
      if (this.themeLinkElement) {
        document.head.removeChild(this.themeLinkElement);
      }

      if (prevThemeClassName) {
        this.hostElement.nativeElement.classList.remove(prevThemeClassName);
      }
      this.hostElement.nativeElement.classList.add(theme.cssClassName);

      this.themeLinkElement = themeLinkElement;
      this.lastTheme = theme;
    });
  }
}