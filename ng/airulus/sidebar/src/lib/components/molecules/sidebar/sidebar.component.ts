import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'arl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @HostBinding('class.expanded')
  public isExpanded = false;

  @Input()
  public expandLabel: string;

  @Input()
  public expanded: boolean;

  @Output()
  public expand = new EventEmitter<Event>();

  @Output()
  public collapse = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void { 
    if (this.expanded) {
      this.isExpanded = true;
    }
  }

  public toggle() {
    if (this.isExpanded) {
      const event = new Event('expand', {
        bubbles: true,
        cancelable: true
      });
      this.collapse.next(event);
      if (!event.defaultPrevented) {
        this.isExpanded = false;
      }
    } else {
      const event = new Event('expand', {
        bubbles: true,
        cancelable: true
      });
      this.expand.next(event);
      if (!event.defaultPrevented) {
        this.isExpanded = true;
      }
    }
  }
}
