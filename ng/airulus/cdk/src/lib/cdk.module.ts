import { AirulusCommonModule } from './common';
import { AirulusFilesModule } from './files';
import { AirulusOverlayModule } from './overlay';
import { AirulusPortalModule } from './portal';
import { AirulusTypographyModule } from './typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    AirulusCommonModule,
    AirulusPortalModule,
    AirulusOverlayModule,
    AirulusFilesModule,
    AirulusTypographyModule
  ],
  exports: [
    AirulusPortalModule,
    AirulusOverlayModule,
    AirulusFilesModule,
    AirulusTypographyModule
  ],
  providers: [],
})
export class AirulusCdkModule {}