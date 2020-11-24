import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-system-configuration-icon-icon',
  templateUrl: './system-configuration-icon.component.svg'
})
export class AdkSystemConfigurationIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';

  @Input()
  public spin = false;
}

