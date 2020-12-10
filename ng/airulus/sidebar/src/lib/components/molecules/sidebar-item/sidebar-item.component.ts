import {
  Component,
  HostBinding,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'arl-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input()
  public active: boolean;

  @Input()
  public cta: boolean;

  @HostBinding('class.active')
  public get isActive() {
    return this.active;
  }

  @HostBinding('class.cta')
  public get isCta() {
    return this.cta;
  }

  constructor() { }

  ngOnInit(): void { }
}
