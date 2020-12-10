import { AirulusExplorerCommonModule } from './modules/common';
import { AirulusExplorerFileUploaderModule } from './modules';
import { AirulusFormsModule } from '@adk/ng/airulus/forms';
import { AirulusIconsModule } from '@adk/ng/airulus/icons';
import { AirulusLayoutsModule } from '@adk/ng/airulus/layouts';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AirulusIconsModule,
    AirulusLayoutsModule,
    AirulusFormsModule,
    AirulusExplorerFileUploaderModule,
    AirulusExplorerCommonModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS,
    AirulusExplorerFileUploaderModule,
    AirulusExplorerCommonModule
  ]
})
export class AirulusExplorerModule {}
