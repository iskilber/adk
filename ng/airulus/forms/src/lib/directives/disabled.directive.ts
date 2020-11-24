import {
  Directive,
  HostBinding,
  Input
  } from '@angular/core';

@Directive({
  selector: '[adkInputDisabled]',
})
export class DisabledDirective {

  @Input('adkInputDisabled')
  public disabled: boolean;

  @HostBinding('class.disabled')
  public get isDisabled() {
    return this.disabled;
  }
}
