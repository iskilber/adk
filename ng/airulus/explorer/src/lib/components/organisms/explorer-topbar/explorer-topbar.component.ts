import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'arl-explorer-topbar',
  templateUrl: './explorer-topbar.component.html',
  styleUrls: ['./explorer-topbar.component.scss']
})
export class AirulusExplorerTopbarComponent implements OnInit {

  @Input()
  public path: string[];

  @Output()
  public changeView = new EventEmitter<string>();

  @Output()
  public navigateToParent = new EventEmitter<void>();

  @Output()
  public navigateToHome = new EventEmitter<void>();

  @Output()
  public navigateToPath = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }
}
