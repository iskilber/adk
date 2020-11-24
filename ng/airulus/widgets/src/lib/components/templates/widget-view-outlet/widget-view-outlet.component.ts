import { BehaviorSubject } from 'rxjs';
import {
  Component,
  Inject,
  InjectionToken,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
  } from '@angular/core';

export const WIDGET_OUTLET_VIEW = new InjectionToken('WIDGET_OUTLET_VIEW');

export function widgetOutletViewFactory() {
  return new BehaviorSubject<string>(null);
}

@Component({
  selector: 'adk-widget-view-outlet',
  templateUrl: './widget-view-outlet.component.html',
  styleUrls: ['./widget-view-outlet.component.scss'],
  providers: [
    {
      provide: WIDGET_OUTLET_VIEW,
      useFactory: widgetOutletViewFactory
    }
  ]
})
export class AdkWidgetViewOutletComponent implements OnChanges {

  @Input()
  public view: string;

  constructor(
    @Inject(WIDGET_OUTLET_VIEW)
    private view$: BehaviorSubject<string>
  ) { }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.view) {
      this.view$.next(changes.view.currentValue);
    }
  }
}
