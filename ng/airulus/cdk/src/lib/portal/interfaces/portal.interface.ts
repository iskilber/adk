import type { IAirulusPortalOutlet } from './portal-outlet.interface';

export interface IAirulusPortal<T> {
  attach(host: IAirulusPortalOutlet): T;
  detach(): void;
  isAttached(): boolean;
  setAttachedHost(host: IAirulusPortalOutlet | null): void;
}
