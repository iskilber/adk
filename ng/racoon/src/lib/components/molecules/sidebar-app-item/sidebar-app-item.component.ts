import {
  Component,
  Input,
  OnInit
  } from '@angular/core';
import { IRacoonApplicationLink } from '../../../interfaces';
import { Location } from '@angular/common';

@Component({
  selector: 'rcn-sidebar-app-item',
  templateUrl: './sidebar-app-item.component.html',
  styleUrls: ['./sidebar-app-item.component.scss']
})
export class RacoonSidebarAppItemComponent implements OnInit {

  @Input()
  public applicationLink: IRacoonApplicationLink;

  ngOnInit(): void { }
}
