import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'arl-explorer-topbar',
  templateUrl: './explorer-topbar.component.html',
  styleUrls: ['./explorer-topbar.component.scss']
})
export class AirulusExplorerTopbarComponent implements OnInit {

  @Output()
  public changeView = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }
}
