import {
  Component,
  OnInit
  } from '@angular/core';

@Component({
  selector: '*[arlText]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./text.component.scss']
})
export class AirulusTextComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
