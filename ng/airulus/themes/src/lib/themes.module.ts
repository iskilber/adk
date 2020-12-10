import { CommonModule } from '@angular/common';
import {
  CurrentThemeQuery,
  CurrentThemeStore,
  ThemeListQuery,
  ThemeListStore,
  ThemesService
  } from './services';
import { DIRECTIVES } from './directives';
import { IThemeModuleConfig } from './interfaces';
import {
  ModuleWithProviders,
  NgModule
  } from '@angular/core';
import { THEME_LIST_URL } from './themes.consts';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DIRECTIVES
  ],
  providers: [
    ThemeListStore,
    ThemeListQuery,
    CurrentThemeStore,
    CurrentThemeQuery,
    ThemesService
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class AirulusThemesModule {}
