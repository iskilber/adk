import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-cloud-error-icon',
  templateUrl: './cloud-error-icon.component.svg'
})
export class AdkCloudErrorIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}

