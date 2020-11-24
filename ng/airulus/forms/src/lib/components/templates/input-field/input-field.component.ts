import {
  Component,
  Input,
  OnInit,
  TemplateRef
  } from '@angular/core';
import type { 
  IFieldLabelContext,
  IInputContainerContext } from '../../../interfaces';

@Component({
  selector: 'adk-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {

  @Input()
  public label: string

  @Input()
  public error?: boolean;

  @Input()
  public required?: boolean;

  @Input()
  public labelTemplate: TemplateRef<IFieldLabelContext>;

  @Input()
  public inputContainerTemplate: TemplateRef<IInputContainerContext>;

  public get labelCtx(): IFieldLabelContext {
    return {
      label: this.label,
      error: this.error,
      required: this.required
    };
  }

  public get inputContainerCtx(): IInputContainerContext {
    return {}
  }
}
