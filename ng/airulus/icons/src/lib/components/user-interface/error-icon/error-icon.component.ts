import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-error-icon',
  templateUrl: './error-icon.component.svg'
})
export class AdkErrorIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}

