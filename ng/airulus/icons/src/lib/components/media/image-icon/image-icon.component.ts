import {
  Component,
  Input,
  OnInit
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'arl-image-icon',
  templateUrl: './image-icon.component.svg'
})
export class AirulusImageIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard'
}
