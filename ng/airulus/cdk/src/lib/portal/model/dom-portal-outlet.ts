import { AirulusComponentPortal } from './component-portal';
import { AirulusDomPortal } from './dom-portal';
import { AirulusPortalOutlet } from './portal-outlet';
import { AirulusTemplatePortal } from './template-portal';
import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injector
  } from '@angular/core';

/**
 * A Portal outlet to attaching portals into DOM outside of angular application
 * context.
 */
export class AirulusDomPortalOutlet extends AirulusPortalOutlet {

  constructor(
    private document: Document,
    private outletElement: Element,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private defaultInjector: Injector
  ) {
    super();
  }

  public attachComponentPortal<T>(portal: AirulusComponentPortal<T>): ComponentRef<T> {
    const resolver = portal.componentFactoryResolver || this.componentFactoryResolver;
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    // Initiate component in right application context.
    const componentRef: ComponentRef<T> = portal.viewContainerRef ?
        this.attachComponentPortalToExistingView(portal, componentFactory) :
        this.attachComponentPortalToAppView(portal, componentFactory);

    this.outletElement.appendChild(this.getComponentRootNode(componentRef));

    return componentRef;
  }

  public attachTemplatePortal<C>(portal: AirulusTemplatePortal<C>): EmbeddedViewRef<C> {
    const viewContainer = portal.viewContainerRef;
    const viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);

    viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));

    viewRef.detectChanges();

    this.displosed$.subscribe(() => {
      const index = viewContainer.indexOf(viewRef);
      if (index > -1) {
        viewContainer.remove(index);
      }
    });

    return viewRef;
  }

  public attachDomPortal<T extends HTMLElement>(portal: AirulusDomPortal<T>): T {
    const element = portal.element;
    if (!element.parentNode) {
      throw Error('DOM portal content must be attached to parent node');
    }
    const anchorNode = this.document.createComment('dom-portal');
    element.parentNode.insertBefore(anchorNode, element);
    this.outletElement.appendChild(element);

    this.displosed$.subscribe(() => {
      if (anchorNode.parentNode) {
        anchorNode.parentNode.replaceChild(element, anchorNode);
      }
    });

    return element;
  }

  public dispose(): void {
    super.dispose();

    if (this.outletElement.parentNode !== null) {
      this.outletElement.parentNode.removeChild(this.outletElement);
    }
  }

  /**
   * Attach component portal to specific place in application tree. (Not from
   * rendering point but from dependency injection poin of view)
   */
  private attachComponentPortalToExistingView<T>(
    portal: AirulusComponentPortal<T>,
    componentFactory: ComponentFactory<T>
  ): ComponentRef<T> {
    const componentRef = portal.viewContainerRef.createComponent(
      componentFactory,
      portal.viewContainerRef.length,
      portal.injector || portal.viewContainerRef.injector
    );
    this.displosed$.subscribe(() => {
      componentRef.destroy();
    });

    return componentRef;
  }

  private attachComponentPortalToAppView<T>(
    portal: AirulusComponentPortal<T>,
    componentFactory: ComponentFactory<T>
  ): ComponentRef<T> {
    const componentRef = componentFactory.create(portal.injector || this.defaultInjector);
    this.appRef.attachView(componentRef.hostView);
    this.displosed$.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });

    return componentRef;
  }

  private getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement; 
  }
}
