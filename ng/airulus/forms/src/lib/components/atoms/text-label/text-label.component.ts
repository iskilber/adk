import {
  Component,
  Input
  } from '@angular/core';

@Component({
  selector: 'adk-text-label',
  templateUrl: './text-label.component.html',
  styleUrls: ['./text-label.component.scss']
})
export class TextLabelComponent {
  @Input()
  public required?: boolean;

  @Input()
  public error?: boolean;
}
