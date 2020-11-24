import { COMPONENTS } from './components';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class AdkCardModule {}
