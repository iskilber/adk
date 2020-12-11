import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
  } from '@angular/core';
import { IAirulusOverlayContentPosition } from '../../../interfaces';

@Component({
  selector: 'arl-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.scss']
})
export class AirulusOverlayContainerComponent implements OnInit, OnDestroy {

  @ViewChild('anchor', { read: ViewContainerRef, static: true })
  public viewContainerRef: ViewContainerRef;

  @Input()
  public backdrop: boolean;

  @Input()
  public contentPositionLeft: number;

  @Input()
  public position: IAirulusOverlayContentPosition;

  @Input()
  public extraClassNames: string[];

  @Output()
  public outsideClick = new EventEmitter();

  @HostListener('document:click', ['$event'])
  public handleClick() {
    this.outsideClick.next();
  }

  @HostListener('document:keydown.escape')
  public handleEscapeKey() {
    this.outsideClick.next();
  }

  constructor(
    public hostView: ViewContainerRef,
    public hostElementRef: ElementRef<HTMLElement>
  ) { }

  ngOnInit(): void { 
    if (this.extraClassNames) {
      this.extraClassNames.forEach((className) => {
        this.hostElementRef.nativeElement.classList.add(className);
      });
    }
  }

  ngOnDestroy() {

  }
}

