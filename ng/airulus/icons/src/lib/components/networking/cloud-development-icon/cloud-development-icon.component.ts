import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-cloud-development-icon',
  templateUrl: './cloud-development-icon.component.svg'
})
export class AdkCloudDevelopmentIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard'
}
