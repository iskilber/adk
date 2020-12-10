import { CommonModule } from '@angular/common';
import { DIRECTIVES } from './directives';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [ CommonModule ],
  exports: [
    ...DIRECTIVES
  ],
  providers: [],
})
export class AirulusPortalModule {}