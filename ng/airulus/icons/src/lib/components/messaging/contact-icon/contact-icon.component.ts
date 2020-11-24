import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-contact-icon',
  templateUrl: './contact-icon.component.svg'
})
export class AdkContactIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard'
}
