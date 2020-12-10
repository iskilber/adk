import {
  DOCUMENT,
  PlatformLocation
  } from '@angular/common';
import {
  Inject,
  Injectable,
  OnDestroy
  } from '@angular/core';

@Injectable()
export class AirulusOverlayContainerService implements OnDestroy {

  protected containerElement: HTMLElement;

  constructor(
    @Inject(DOCUMENT)
    private document: Document
  ) {

  }

  public getContainerElement(): HTMLElement {
    if (!this.containerElement) {
      this.containerElement = this.createContainerElement();
    }

    return this.containerElement;
  }

  public ngOnDestroy() {
    const container = this.containerElement;

    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }

  private createContainerElement(): HTMLElement {
    const containerClass= 'arl-overlay-container';
    const container = this.document.createElement('div');

    container.classList.add(containerClass);
    this.document.body.append(container);
    return container;
  }
}