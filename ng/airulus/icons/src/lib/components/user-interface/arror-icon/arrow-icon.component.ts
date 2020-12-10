import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'arl-arrow-icon',
  templateUrl: './arrow-icon.component.svg'
})
export class ArrowIconComponent extends SvgIconComponent {
  @Input()
  public direction: 'left' | 'right' | 'bottom' | 'up' = 'left';

  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}

