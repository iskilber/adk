import {
  Component,
  Input
  } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: 'svg-icon.component.svg',
  styleUrls: ['svg-icon.component.scss']
})
export class SvgIconComponent {

  @Input()
  public title?: string;

  @Input()
  public color?: string;

  @Input()
  public size?: string;

  @Input()
  public spin?: boolean;

  @Input()
  public cta?: boolean;
}