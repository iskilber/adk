import { AirulusCdkModule } from '@airulus/cdk';
import { AirulusDialogService } from './services';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AirulusCdkModule
  ],
  providers: [AirulusDialogService]
})
export class AirulusDialogModule {

}

