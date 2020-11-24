import {
  Component,
  Input,
  OnInit,
  TemplateRef
  } from '@angular/core';
import { IWidgetErrorPanelContext } from '../../../interfaces';

@Component({
  selector: 'adk-widget-data-view',
  templateUrl: './widget-data-view.component.html',
  styleUrls: ['./widget-data-view.component.scss']
})
export class WidgetDataViewComponent implements OnInit {

  @Input()
  public viewName: string;

  @Input()
  public view: TemplateRef<any>;

  @Input()
  public errorMessage?: string;

  @Input()
  public error?: any;

  @Input()
  public pending?: boolean;

  @Input()
  public empty?: boolean;

  @Input()
  public errorPanel?: TemplateRef<IWidgetErrorPanelContext>;

  constructor() { }

  ngOnInit(): void { }

  public get errorCtx(): IWidgetErrorPanelContext {
    return {
      error: this.error,
      message: this.errorMessage
    }
  }
}
