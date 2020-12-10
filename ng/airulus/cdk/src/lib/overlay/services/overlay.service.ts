import { AirulusDomPortalOutlet } from '../../portal';
import { AirulusOverlayContainerService } from './overlay-container.service';
import { AirulusOverlayRef } from './overlay-ref.service';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  Host,
  Inject,
  Injectable,
  Injector,
  ViewContainerRef
  } from '@angular/core';
import {
  DOCUMENT,
  Location
  } from '@angular/common';
import { IAirulusOverlayConfig } from '../interfaces';

/**
 * App wide singleton service to manage overlay layers
 */
@Injectable({ providedIn: 'root' })
export class AirulusOverlayService {

  public static panelUniqueId = 0;

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private location: Location,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver
  ) {}

  public create(config: IAirulusOverlayConfig): AirulusOverlayRef {
    const overlayRef = new AirulusOverlayRef(
      this.injector, 
      this.document,
      config,
      this.appRef,
      this.resolver
    );

    return overlayRef;
  }
}
