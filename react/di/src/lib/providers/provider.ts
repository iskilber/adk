import { Injector } from '../injector';

export abstract class Provider<T = any> {

  constructor(
    public injectionType: any, 
    public multi: boolean = false
  ) {}

  public abstract provide(injector: Injector): T;
}
