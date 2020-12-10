import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PIPES } from './pipes';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    ...PIPES
  ],
  exports: [
    ...PIPES
  ],
})
export class AirulusFilesModule {

}