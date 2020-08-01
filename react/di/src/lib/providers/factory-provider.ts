import {
  FactoryProviderConfig,
  Injector
  } from '../injector';
import { Provider } from './provider';

export declare namespace FactoryProvider {
  type FactoryFunction<T> = (...args: any[]) => T;
}

export class FactoryProvider<T> extends Provider<T> {
  public static SINGLETON = true;

  public static NOT_SINGLETON = false;

  private result: T;

  constructor(
    type: any,
    private factoryFn: (...args: any[]) => T,
    private depsTypes: any[] = [],
    private singleton = FactoryProvider.SINGLETON,
    multi?: boolean
  ) {
    super(type, multi);
  }

  public provide(injector: Injector) {
    if (!this.result || !this.singleton) {
      const deps = this.depsTypes.map((depType) => injector.get(depType));

      this.result = Reflect.apply(this.factoryFn, undefined, deps);
    }
    return this.result;
  }

  public static isConfig(config: any): config is FactoryProviderConfig {
    return config && config.useFactory && config.provide;
  }

  public static fromConfig(config: FactoryProviderConfig): FactoryProvider<any> {
    return new FactoryProvider<any>(
      config.provide,
      config.useFactory,
      config.deps,
      config.multi);
  }
}
