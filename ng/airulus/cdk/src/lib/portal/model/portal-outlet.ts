import { AirulusComponentPortal } from './component-portal';
import { AirulusDomPortal } from './dom-portal';
import { AirulusTemplatePortal } from './template-portal';
import { BehaviorSubject } from 'rxjs';
import {
  ComponentRef,
  EmbeddedViewRef
  } from '@angular/core';
import {
  IAirulusPortal,
  IAirulusPortalOutlet
  } from '../interfaces';

export abstract class AirulusPortalOutlet implements IAirulusPortalOutlet {

  protected attachedPortal$ = new BehaviorSubject<IAirulusPortal<any>>(null);

  protected displosed$ = new BehaviorSubject<boolean>(false);

  public get attachedPortal() {
    return this.attachedPortal$.getValue();
  }

  public set attachedPortal(portal: IAirulusPortal<any>) {
    this.attachedPortal$.next(portal);
  }

  public get isDisposed(): boolean {
    return this.displosed$.getValue();
  }


  public attach<T>(portal: AirulusComponentPortal<T>): ComponentRef<T>
  public attach<T>(portal: AirulusTemplatePortal<T>): EmbeddedViewRef<T>
  public attach(portal: any): any {
    if (!portal) {
      throw new Error('[AirulusPortalOutlet]: portal is empty!');
    }

    if (this.hasAttached()) {
      throw new Error('[AirulusPortalOutlet] portal already attached!');
    }

    if (this.isDisposed) {
      throw new Error('[AirulusPortalOutlet] portal outlet disposed!');
    }

    if (portal instanceof AirulusComponentPortal) {
      this.attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof AirulusTemplatePortal) {
      this.attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    } else if (portal instanceof AirulusDomPortal) {
      this.attachedPortal = portal;
      return this.attachDomPortal(portal);
    } else {
      throw new Error('[AirulusPortalOutlet] unknown portal type!');
    }
  }

  public hasAttached() {
    return !!this.attachedPortal;
  }

  public abstract attachComponentPortal<T>(portal: AirulusComponentPortal<T>): ComponentRef<T>;

  public abstract attachTemplatePortal<C>(portal: AirulusTemplatePortal<C>): EmbeddedViewRef<C>;

  public abstract attachDomPortal<T extends HTMLElement>(portal: AirulusDomPortal<T>): any;

  public detach() {
    if (this.attachedPortal) {
      this.attachedPortal.setAttachedHost(null);
      this.attachedPortal = null;
    }
  }

  public dispose() {
    if (this.hasAttached) {
      this.detach();
    }
    this.displosed$.next(true); 
    this.displosed$.complete();
  }
}
