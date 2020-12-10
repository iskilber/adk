import {
  Component,
  Input,
  OnInit
  } from '@angular/core';
import { SvgIconComponent } from '../../core';

@Component({
  selector: 'arl-mime-type-icon',
  templateUrl: './mime-type-icon.component.html'
})
export class AirulusMimeTypeIconComponent extends SvgIconComponent {

  @Input()
  public mimeType: string;

  @Input()
  public viewType: 'filled' | 'standard' = 'standard';
}
