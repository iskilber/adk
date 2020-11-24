import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [],
})
export class AirulusIconsModule { }
