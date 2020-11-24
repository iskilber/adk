import { BehaviorSubject } from 'rxjs';
import {
  Component,
  Inject,
  Input,
  OnInit,
  TemplateRef
  } from '@angular/core';
import { WIDGET_OUTLET_VIEW } from '../widget-view-outlet/widget-view-outlet.component';

@Component({
  selector: 'adk-widget-view',
  templateUrl: './widget-view.component.html',
})
export class AdkWidgetViewComponent {

  @Input()
  public viewName: string;

  @Input()
  public view: TemplateRef<any>;

  constructor(
    @Inject(WIDGET_OUTLET_VIEW)
    public view$: BehaviorSubject<string>
  ) { }
}
