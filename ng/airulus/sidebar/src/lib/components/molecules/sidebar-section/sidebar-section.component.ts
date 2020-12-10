import {
  Component,
  HostBinding,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'arl-sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements OnInit {

  @Input()
  public topSeparator: boolean;

  @Input()
  public bottomSeparator: boolean;

  constructor() { }

  ngOnInit(): void { }
}
