import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-web-icon',
  templateUrl: './web-icon.component.svg'
})
export class AdkWebIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';

  @Input()
  public spin = false;
}

