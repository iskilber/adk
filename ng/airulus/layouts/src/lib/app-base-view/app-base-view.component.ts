import { Component } from '@angular/core';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'adk-app-base-view',
  templateUrl: 'app-base-view.component.html',
  styleUrls: ['app-base-view.component.scss']
})
export class AppBaseViewComponent extends ViewComponent {}
