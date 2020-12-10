import {
  Component,
  Input,
  OnInit
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'arl-grid-view-icon',
  templateUrl: './grid-view-icon.component.svg'
})
export class AirulusGridViewIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard'
}
