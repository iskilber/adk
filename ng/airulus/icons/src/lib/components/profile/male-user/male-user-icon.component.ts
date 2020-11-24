import {
  Component,
  Input,
  OnInit
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-male-user-icon',
  templateUrl: './male-user-icon.component.svg'
})
export class AdkMaleUserIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard'
}
