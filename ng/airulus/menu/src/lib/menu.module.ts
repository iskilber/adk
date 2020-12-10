import { AirulusCdkModule } from '@airulus/cdk';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AirulusCdkModule
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class AirulusMenuModule {}