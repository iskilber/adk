import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit
  } from '@angular/core';
import { IAirulusOverlayContentPosition } from '../../../interfaces';

@Component({
  selector: 'arl-overlay-position',
  templateUrl: './overlay-position.component.html',
  styleUrls: ['./overlay-position.component.scss']
})
export class AirulusOverlayPositionComponent implements OnInit {

  @Input()
  public position: IAirulusOverlayContentPosition;

  @HostBinding('style.display')
  public get displayStyle() {
    return !this.position.anchor &&
      (['left', 'right', 'center'].includes(this.position.horizontal) ||
       ['bottom' , 'top' , 'center'].includes(this.position.vertical)) ?
       'grid' : 'block';
  }

  @HostBinding('style.width')
  public get conainerWidth() {
    if (['left', 'right', 'center'].includes(this.position.horizontal)) {
      if (this.position.horizontalPadding) {
        return `calc(100% - ${this.position.horizontalPadding} - ${this.position.horizontalPadding})`
      } else {
        return '100%';
      }
    }
  }

  @HostBinding('style.height')
  public get containerHeight() {
    if (!this.position.anchor && ['bottom' , 'top' , 'center'].includes(this.position.vertical)) {
      if (this.position.verticalPadding) {
        return `calc(100% - ${this.position.verticalPadding} - ${this.position.verticalPadding})`
      } else {
        return '100%';
      }
    } else {
      return undefined;
    }
  }

  @HostBinding('style.justify-content')
  public get justifyContent() {
    if (!this.position.anchor) {
      switch (this.position.horizontal) {
        case 'left': return 'left';
        case 'right': return 'right';
        case 'center': return 'center';
        default: 
          return undefined;
      }
    } else {
      return undefined;
    }
  }

  @HostBinding('style.align-items')
  public get alignItems() {
    if (!this.position.anchor) {
      switch (this.position.vertical) {
        case 'top': return 'flex-start';
        case 'bottom': return 'flex-end';
        case 'center': return 'center';
        default: 
          return undefined;
      }
    } else {
      return undefined;
    }
  }

  @HostBinding('style.padding')
  public get absoluteLeftPosition() {
    if (!this.position.anchor) {
      const basePaddingLeft = !['left', 'right', 'center'].includes(this.position.horizontal) ?
        this.position.horizontal :
        0;
      const paddingLeft = this.position.horizontalPadding ?
        basePaddingLeft ? 
          `calc(${basePaddingLeft} + ${this.position.horizontalPadding})` :
          this.position.horizontalPadding :
        basePaddingLeft;

      const basePaddingTop = !['top', 'bottom', 'center'].includes(this.position.vertical) ?
        this.position.vertical :
        0;
      const paddingTop = this.position.verticalPadding ?
        basePaddingTop ? 
          `calc(${basePaddingTop} + ${this.position.verticalPadding})` :
          this.position.verticalPadding :
        basePaddingTop;
      const paddingRight = this.position.horizontalPadding || '0';
      const bottomPadding = this.position.verticalPadding || '0';

      return `${paddingTop} ${paddingRight} ${bottomPadding} ${paddingLeft}`;
    }
  }

  @HostBinding('style.top.px')
  public get relativeTopPosition() {
    if (this.position.anchor) {
      let baseTop: number;

      if (this.position.vertical === 'top') {
        const hostElementRect = this.elementRef.nativeElement.getBoundingClientRect();
        baseTop = this.position.anchor.top - hostElementRect.height;
      } else if (this.position.vertical === 'center') {
        baseTop = this.position.anchor.top + (this.position.anchor.height / 2);
      } else {
        baseTop = this.position.anchor.bottom;
      }
      return baseTop;
    } else {
      return 0;
    }
  }

  @HostBinding('style.left.px')
  public get relativeLeftPosition() {
    if (this.position.anchor) {
      let baseLeft: number;
      if (this.position.horizontal === 'right') {
        const hostElementRect = this.elementRef.nativeElement.getBoundingClientRect();
        baseLeft = this.position.anchor.right - hostElementRect.width;
      } else if (this.position.horizontal === 'center') {
        baseLeft = this.position.anchor.right - (this.position.anchor.width / 2);
      } else {
        baseLeft = this.position.anchor.left;
      }
      return baseLeft;
    } else {
      return 0;
    }
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) { }

  ngOnInit(): void { }
}
