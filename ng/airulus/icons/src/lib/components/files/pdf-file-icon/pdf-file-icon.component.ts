import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'arl-pdf-file-icon',
  templateUrl: './pdf-file-icon.component.svg'
})
export class AirulusPdfFileIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}

