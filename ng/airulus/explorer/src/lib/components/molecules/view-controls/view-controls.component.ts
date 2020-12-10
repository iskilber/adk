import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'arl-explorer-view-controls',
  templateUrl: './view-controls.component.html',
  styleUrls: ['./view-controls.component.scss']
})
export class AirulusExplorerViewControlsComponent implements OnInit {

  @Output()
  public changeView = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }
}
