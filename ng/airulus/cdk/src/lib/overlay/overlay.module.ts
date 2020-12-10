import {
  AirulusOverlayContainerService,
  AirulusOverlayService
  } from './services';
import { AirulusPortalModule } from '../portal';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { DIRECTIVES } from '../portal/directives';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [ 
    CommonModule,
    AirulusPortalModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  providers: [
    AirulusOverlayService,
    AirulusOverlayContainerService
  ],
})
export class AirulusOverlayModule {}