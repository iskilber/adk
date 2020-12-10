import { AirulusIconsModule } from '@adk/ng/airulus/icons';
import { AirulusLayoutsModule } from '@adk/ng/airulus/layouts';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...COMPONENTS
  ],
  imports: [ 
    CommonModule,
    AirulusIconsModule,
    AirulusLayoutsModule
  ],
  exports: [
    ...DIRECTIVES,
    ...COMPONENTS
  ],
  providers: [],
})
export class AirulusFileDropModule {}
