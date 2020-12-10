import {
  Component,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'rcn-sidebar-view-link',
  templateUrl: './sidebar-view-link.component.html',
  styleUrls: ['./sidebar-view-link.component.scss']
})
export class RacoonSidebarViewLinkComponent implements OnInit {

  @Input()
  public label: string;

  @Input()
  public path: string;

  constructor() { }

  ngOnInit(): void { }
}
