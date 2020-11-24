import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'secured-letter-icon',
  templateUrl: './secured-letter-icon.component.svg'
})
export class SecuredLetterIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard'
}
