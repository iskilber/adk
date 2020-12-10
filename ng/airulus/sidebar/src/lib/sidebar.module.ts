import { AirulusIconsModule } from '@adk/ng/airulus/icons';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ 
    CommonModule,
    AirulusIconsModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class AirulusSidebarModule {}
