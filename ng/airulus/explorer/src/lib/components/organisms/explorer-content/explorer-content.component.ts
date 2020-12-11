import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
  } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'arl-explorer-content',
  templateUrl: './explorer-content.component.html',
  styleUrls: ['./explorer-content.component.scss']
})
export class AirulusExplorerContentComponent implements OnInit {
  @Input()
  public viewType: string;

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {

  }
}
