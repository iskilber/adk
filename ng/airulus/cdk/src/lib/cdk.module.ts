import { AirulusCommonModule } from './common';
import { AirulusFilesModule } from './files';
import { AirulusOverlayModule } from './overlay';
import { AirulusPortalModule } from './portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    AirulusCommonModule,
    AirulusPortalModule,
    AirulusOverlayModule,
    AirulusFilesModule
  ],
  exports: [
    AirulusPortalModule,
    AirulusOverlayModule,
    AirulusFilesModule
  ],
  providers: [],
})
export class AirulusCdkModule {}