import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'adk-thumbnail-icon',
  templateUrl: './thumbnail-icon.component.svg'
})
export class AdkThumbnailIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}

