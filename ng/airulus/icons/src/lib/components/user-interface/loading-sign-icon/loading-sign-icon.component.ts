import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-loading-sign-icon',
  templateUrl: './loading-sign-icon.component.svg'
})
export class AdkLoadingSignIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';

  @Input()
  public spin = false;
}

