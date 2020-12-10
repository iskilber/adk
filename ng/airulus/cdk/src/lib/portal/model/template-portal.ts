import { AirulusPortal } from './portal';
import {
  ElementRef,
  EmbeddedViewRef,
  TemplateRef,
  ViewContainerRef
  } from '@angular/core';
import { IAirulusPortalOutlet } from '../interfaces';

export class AirulusTemplatePortal<C = any> extends AirulusPortal<EmbeddedViewRef<C>> {
  constructor(
    public templateRef: TemplateRef<C>,
    public viewContainerRef: ViewContainerRef,
    public context?: C
  ) {
    super();
  }

  public get origin(): ElementRef {
    return this.templateRef.elementRef;
  }

  public attach(host: IAirulusPortalOutlet, context: C = this.context): EmbeddedViewRef<C> {
    this.context = context;

    return super.attach(host);
  }

  public detach(): void {
    this.context = undefined;

    return super.detach();
  }
}