import { BehaviorSubject } from 'rxjs';
import {
  IAirulusPortal,
  IAirulusPortalOutlet
  } from '../interfaces';

export abstract class AirulusPortal<T> implements IAirulusPortal<T> {

  private attachedHost$ = new BehaviorSubject<IAirulusPortalOutlet | null>(null);

  protected get attachedHost(): IAirulusPortalOutlet | null {
    return this.attachedHost$.getValue();
  }

  protected set attachedHost(host: IAirulusPortalOutlet | null) {
    this.attachedHost$.next(host);
  }
  
  /**
   * Attach portal to host
   */
  public attach(host: IAirulusPortalOutlet): T {
    if (!host) {
      throw new Error('[Airulus portal]: host is empty');
    }
    if (host.hasAttached()) {
      throw new Error('[Airulus portal]: host already attached');
    }

    this.attachedHost = host;
    return <T>host.attach(this);
  }

  /**
   * Detach portal from host
   */
  public detach(): void {
    const host = this.attachedHost;

    if (!!host) {
      this.attachedHost = null;
    } else {
      throw new Error('[Airulus portal]: already detached!');
    }
  }

  public isAttached(): boolean {
    return !!this.attachedHost;
  }

  public setAttachedHost(host: IAirulusPortalOutlet | null): void {
    this.attachedHost = host;
  }
}
