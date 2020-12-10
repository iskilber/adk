import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'arl-basic-arrow-icon',
  templateUrl: './basic-arrow-icon.component.svg'
})
export class AirulusBasicArrowIconComponent extends SvgIconComponent {
  @Input()
  public direction: 'left' | 'right' | 'bottom' | 'up' = 'left';

  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}

