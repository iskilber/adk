import { AppBaseViewComponent } from './app-base-view/app-base-view.component';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { NgModule } from '@angular/core';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ViewComponent,
    AppBaseViewComponent,
    ...COMPONENTS
  ],
  declarations: [
    ViewComponent,
    AppBaseViewComponent,
    ...COMPONENTS
  ],
  providers: [],
})
export class AirulusLayoutsModule { }
