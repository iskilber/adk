import { AirulusOverlayService } from '@airulus/cdk';
import { BehaviorSubject } from 'rxjs';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
  } from '@angular/core';

@Component({
  selector: 'arl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class AirulusMenuComponent {

  @ViewChild('menu')
  public menuRef: TemplateRef<any>;

  @Output()
  public menuSelect = new EventEmitter();

  constructor(
    protected overlay: AirulusOverlayService
  ) { }

  public close() {
    console.log('CLOSE!');
  }
}
