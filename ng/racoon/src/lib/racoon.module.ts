import { AirulusIconsModule } from '@adk/ng/airulus/icons';
import { AirulusLayoutsModule } from '@adk/ng/airulus/layouts';
import { AirulusMenuModule } from '@adk/ng/airulus/menu';
import { AirulusSidebarModule } from '@adk/ng/airulus/sidebar';
import { AirulusThemesModule } from '@adk/ng/airulus/themes';
import { AirulusToolbarModule } from '@adk/ng/airulus/toolbar';
import { AuthSsoClientModule } from '@auth/sso-client';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { HttpClientModule } from '@angular/common/http';
import { IRacoonModuleConfig } from './interfaces';
import {
  ModuleWithProviders,
  NgModule
  } from '@angular/core';
import { PIPES } from './pipes';
import { RacoonCqrsModule } from '@racoon/cqrs';
import { RacoonHttpCacheModule } from '@racoon/http-cache';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AirulusLayoutsModule,
    AirulusIconsModule,
    AirulusMenuModule,
    AirulusThemesModule,
    AuthSsoClientModule,
    AirulusSidebarModule,
    AirulusToolbarModule,
    RacoonHttpCacheModule,
    RacoonCqrsModule
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    AirulusLayoutsModule,
    AirulusMenuModule,
    AirulusIconsModule,
    AirulusThemesModule,
    AirulusSidebarModule,
    AirulusToolbarModule,
    RacoonHttpCacheModule,
    RacoonCqrsModule,
    ...COMPONENTS,
    ...PIPES
  ]
})
export class RacoonModule {
  public static forRoot(config: IRacoonModuleConfig): ModuleWithProviders<RacoonModule> {
    return {
      ngModule: RacoonModule,
    }
  }
}
