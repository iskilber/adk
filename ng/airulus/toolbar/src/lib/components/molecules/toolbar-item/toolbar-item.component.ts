import {
  Component,
  HostBinding,
  Input
  } from '@angular/core';

@Component({
  selector: 'arl-toolbar-item',
  templateUrl: './toolbar-item.component.html',
  styleUrls: ['./toolbar-item.component.scss']
})
export class ToolbarItemComponent {

  @Input()
  public cta: boolean;

  @HostBinding('class.cta')
  public get isCta() {
    return this.cta
  }
}
