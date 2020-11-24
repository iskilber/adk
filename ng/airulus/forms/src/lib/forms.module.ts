import { AirulusButtonsModule } from '@adk/ng/airulus/buttons';
import { AirulusIconsModule } from '@adk/ng/airulus/icons';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    AirulusIconsModule,
    AirulusButtonsModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  providers: [],
})
export class AirulusFormsModule {}
