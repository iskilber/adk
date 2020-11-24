import { AdkCardModule } from '@adk/ng/airulus/card';
import { AirulusIconsModule } from '@adk/ng/airulus/icons';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { MOLECULES } from './components/molecules';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AdkCardModule,
    AirulusIconsModule
  ],
  declarations: [
    ...COMPONENTS,
    ...MOLECULES
  ],
  exports: [
    ...COMPONENTS,
    ...MOLECULES
  ]
})
export class AirulusWidgetsModule {}
