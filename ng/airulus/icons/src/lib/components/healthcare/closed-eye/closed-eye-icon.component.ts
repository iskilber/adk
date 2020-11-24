import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-closed-eye-icon',
  templateUrl: './closed-eye-icon.component.svg'
})
export class AdkClosedEyeIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard'
}
