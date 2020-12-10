import { IAirulusPortal } from './portal.interface';

export interface IAirulusPortalOutlet {
  attach(portal: IAirulusPortal<any>): any;
  detach(): any;
  hasAttached(): boolean;
}