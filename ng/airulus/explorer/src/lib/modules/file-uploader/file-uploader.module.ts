import { AirulusCdkModule } from '@airulus/cdk';
import { AirulusExplorerCommonModule } from '../common';
import { AirulusFileUploaderImageResizeService } from './services';
import { AirulusFormsModule } from '@adk/ng/airulus/forms';
import { AirulusLayoutsModule } from '@adk/ng/airulus/layouts';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    AirulusCdkModule,
    AirulusFormsModule,
    AirulusExplorerCommonModule,
    AirulusLayoutsModule,
    AirulusFormsModule
  ],
  providers: [
    AirulusFileUploaderImageResizeService
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class AirulusExplorerFileUploaderModule {

}
