import {
  Component,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'adk-widget-error-panel',
  templateUrl: './widget-error-panel.component.html',
  styleUrls: ['./widget-error-panel.component.scss']
})
export class WidgetErrorPanelComponent implements OnInit {
  @Input()
  public message: string;

  constructor() { }

  ngOnInit(): void { }
}
