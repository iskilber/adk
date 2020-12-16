import {
  Component,
  HostBinding,
  Input
  } from '@angular/core';

@Component({
  selector: 'g[arlSpinningGroup]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./spinning-group.component.scss']
})
export class AirulusSvgSpinningGroupComponent {
  @Input()
  public spinning: boolean;

  @HostBinding('class.spinner')
  public get isSpinning() {
    return this.spinning;
  }
}