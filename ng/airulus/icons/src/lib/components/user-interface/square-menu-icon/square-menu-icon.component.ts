import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'arl-square-menu-icon',
  templateUrl: './square-menu-icon.component.svg'
})
export class AirulusSquareMenuIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}

