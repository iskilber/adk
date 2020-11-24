import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'adk-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.scss']
})
export class FormErrorMessageComponent {
  @Input()
  public cancellable: boolean;

  @Output()
  public hide = new EventEmitter();
}
