import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'arl-warning-folder-icon',
  templateUrl: './warning-folder-icon.component.svg'
})
export class AirulusWarningFolderIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}

