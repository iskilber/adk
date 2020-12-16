import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'arl-explorer-navigation-controls',
  templateUrl: './navigation-controls.component.html',
  styleUrls: ['./navigation-controls.component.scss']
})
export class AirulusExplorerNavigationControlsComponent implements OnInit {

  @Output()
  public navigateToParent = new EventEmitter<void>();

  @Output()
  public navigateToHome = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
   }
}
