import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-plus-icon',
  templateUrl: './plus-icon.component.svg'
})
export class PlusIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard'

  @Input()
  public cta: boolean;
}
