import {
  Component,
  HostBinding,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'arl-view',
  templateUrl: 'view.component.html',
  styleUrls: ['view.component.scss']
})
export class ViewComponent {

  @Input()
  public contentVerticalPosition?: 'top' | 'centered' | 'bottom';

  @Input()
  public contentHorizontalPosition?: 'left' | 'centered' | 'right';

  @Input()
  public verticalScrollable: boolean;

  @HostBinding('class.horizontal-centered')
  public get isHorizontalCentered() {
    return this.contentHorizontalPosition === 'centered';
  }

  @HostBinding('class.horizontal-right')
  public get isHorizontalRight() {
    return this.contentHorizontalPosition === 'right';
  }

  @HostBinding('class.vertical-centered')
  public get isVerticalCentered() {
    return this.contentVerticalPosition === 'centered';
  }

  @HostBinding('class.vertical-bottom')
  public get isVerticalBottom() {
    return this.contentVerticalPosition === 'bottom';
  }

  @HostBinding('class.vertical-scrollable')
  public get isVerticalScrollable() {
    return this.verticalScrollable;
  }
}
