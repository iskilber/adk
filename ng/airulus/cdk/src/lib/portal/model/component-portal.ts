import { AirulusPortal } from './portal';
import {
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  ViewContainerRef
  } from '@angular/core';
import { IComponentType } from '../../common';

export class AirulusComponentPortal<T> extends AirulusPortal<ComponentRef<T>> {

  constructor(
    public component: IComponentType<T>,
    public  viewContainerRef?: ViewContainerRef | null,
    public injector?: Injector | null,
    public componentFactoryResolver?: ComponentFactoryResolver | null
  ) {
    super();
  }
}
