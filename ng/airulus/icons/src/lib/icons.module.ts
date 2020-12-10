import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { NgModule } from '@angular/core';
import { PIPES } from './pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  providers: [],
})
export class AirulusIconsModule { }
