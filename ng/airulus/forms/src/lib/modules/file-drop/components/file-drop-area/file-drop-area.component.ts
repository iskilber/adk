import {
  Component,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'arl-file-drop-area',
  templateUrl: './file-drop-area.component.html',
  styleUrls: ['./file-drop-area.component.scss']
})
export class AirulusFileDropAreaComponent implements OnInit {

  @Input()
  public message: string;

  constructor() { }

  ngOnInit(): void { }
}

