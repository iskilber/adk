import { AirulusPortal } from './portal';
import { ElementRef } from '@angular/core';

export class AirulusDomPortal<T extends HTMLElement> extends AirulusPortal<T> {

  public readonly element: T

  constructor(element: T | ElementRef<T>) {
    super();

    this.element = element instanceof ElementRef ? element.nativeElement : element;
  }
}
