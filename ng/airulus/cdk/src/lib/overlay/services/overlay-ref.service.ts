import { AirulusOverlayContainerComponent } from '../components/molecules/overlay-container/overlay-container.component';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  EventEmitter,
  Injector,
  OnDestroy,
  ɵComponentDef as ComponentDef,
  ɵComponentDef,
  ɵLifecycleHooksFeature as LifecycleHooksFeature,
  ɵrenderComponent as renderComponent,
  TemplateRef
  } from '@angular/core';
import {
  IAirulusOverlayConfig,
  IAirulusOverlayContentPosition
  } from '../interfaces';
import { IComponentType } from '../../common';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

/**
 * OverlayRef is an instance of overlay, which wraps an angular module rendered 
 * by angular IVY render
 */
export class AirulusOverlayRef /*implements IAirulusPortalOutlet, IAirulusOverlayRef */ {
  private componentRef: ComponentRef<AirulusOverlayContainerComponent>;

  public destroy$ = new Subject();

  constructor(
    private defaultInjector: Injector,
    private document: Document,
    private config: IAirulusOverlayConfig,
    private appRef: ApplicationRef,
    private resolver: ComponentFactoryResolver
  ) {}

  public attach(
    template: TemplateRef<any> | IComponentType<any>, 
    injector = this.defaultInjector,
    position: IAirulusOverlayContentPosition
  ) {
    this.componentRef = this.bootstrapEntryComponent(
      AirulusOverlayContainerComponent, 
      injector,
      this.document.body,
      (component) => {
        component.backdrop = this.config.backdrop;
        component.position = position;
        component.extraClassNames = this.config.classNames
      }
    );
 
    if (template instanceof TemplateRef) {
      this.componentRef.instance.viewContainerRef.createEmbeddedView(template);
    } else {
      const componentFactory = this.resolver.resolveComponentFactory(template);
      this.componentRef.instance.viewContainerRef.createComponent(componentFactory);
    }

    if (this.config.closeOnOutsideClick) {
      requestAnimationFrame(() => {
        this.componentRef.instance.outsideClick.subscribe(() => {
          this.destroy();
        });
      });
    }
  }

  public destroy() {

    this.destroy$.next();
    this.destroy$.complete();
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
    this.componentRef = null;
  }

  private bootstrapEntryComponent<T>(
    componentType: new (...args: any[]) => T,
    injector: Injector,
    host: HTMLElement,
    beforeViewAttach: (component: T, componentRef: ComponentRef<T>) => void
  ): ComponentRef<T> {
    const componentFactory = this.resolver.resolveComponentFactory(componentType);
    const componentRef = componentFactory.create(injector);
    beforeViewAttach(componentRef.instance, componentRef);
    this.appRef.attachView(componentRef.hostView);

    const rootNode = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];

    host.appendChild(rootNode);

    return componentRef;
  }
}
