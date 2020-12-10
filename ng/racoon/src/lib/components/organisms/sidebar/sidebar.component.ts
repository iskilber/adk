import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { IRacoonApplicationLink } from '../../../interfaces';

@Component({
  selector: 'rcn-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class RacoonSidebarComponent implements OnInit {

  @Output()
  public logout = new EventEmitter();

  @Input()
  public applicationLinks: IRacoonApplicationLink[];

  constructor() { }

  ngOnInit(): void { }
}
