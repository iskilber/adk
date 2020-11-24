import {
  Component,
  Input,
  OnInit
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-mind-map-icon',
  templateUrl: './mind-map-icon.component.svg'
})
export class AdkMindMapIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard'
}
