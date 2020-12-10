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

  /*
  @HostListener('dragenter', ['$event'])
  public onDragenter(event: Event) {
    const eventTarget = event.target as HTMLElement;
    console.log('E',eventTarget);
    console.log('E', eventTarget === this.element.nativeElement);
  }

  @HostListener('dragleave', ['$event'])
  public onDragleave(event: Event) {
    const eventTarget = event.target as HTMLElement;
    console.log('L', eventTarget);
    console.log('L', eventTarget === this.element.nativeElement);
  }
  */

  ngOnInit(): void {
    //this.dragenter$ = 
    /*
    this.dragover$.subscribe((evt) => {
      console.log('ENTER', evt);
    })
    */
  }
}
