import {
  Component,
  Input
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'arl-add-folder-icon',
  templateUrl: './add-folder-icon.component.svg'
})
export class AirulusAddFolderIconComponent extends SvgIconComponent {
  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}

