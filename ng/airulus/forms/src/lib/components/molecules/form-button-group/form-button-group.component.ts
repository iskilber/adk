import {
  Component,
  Input,
  OnInit,
  TemplateRef
  } from '@angular/core';
import type {
  IResetButtonContext,
  ISubmitButtonContext
  } from '../../../interfaces';

@Component({
  selector: 'arl-form-button-group',
  templateUrl: './form-button-group.component.html',
  styleUrls: ['./form-button-group.component.scss']
})
export class FormButtonGroupComponent implements OnInit {

  @Input()
  public submitLabel: string;

  @Input()
  public submitPending: boolean;

  @Input()
  public resetLabel: string;

  @Input()
  public submitButtonTemplate: TemplateRef<ISubmitButtonContext>;

  @Input()
  public resetButtonTemplate: TemplateRef<IResetButtonContext>;

  @Input()
  public valid: boolean;

  ngOnInit(): void { }

  public get submitButtonCtx(): ISubmitButtonContext {
    return {
      label: this.submitLabel,
      disabled: !this.valid,
      pending: this.submitPending
    }
  }

  public get resetButtonCtx(): ISubmitButtonContext {
    return {
      label: this.resetLabel,
      disabled: false,
      pending: false
    }
  }
}
