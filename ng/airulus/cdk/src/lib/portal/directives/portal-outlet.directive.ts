import {
  Directive,
  Input
  } from '@angular/core';

@Directive({
  selector: '[arlPortalOutlet]',
  exportAs: 'arlPortalOutlet',
})
export class AirulusPortalOutletDirective { 
  @Input('arlPortalOutlet')
  public portal: any;


  constructor() {}
}