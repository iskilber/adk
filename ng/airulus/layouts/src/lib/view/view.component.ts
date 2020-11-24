import {
  Component,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'adk-view',
  templateUrl: 'view.component.html',
  styleUrls: ['view.component.scss']
})
export class ViewComponent {

  @Input()
  public contentVerticalPosition?: 'top' | 'centered' | 'bottom';

  @Input()
  public contentHorizontalPosition?: 'left' | 'centered' | 'right';
}
