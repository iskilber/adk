import {
  ClassProviderConfig,
  Injector
  } from '../injector';
import { Provider } from './provider';

export class ClassProvider<T> extends Provider<T> {

  public static SINGLETON = true;

  public static NOT_SINGLETON = false;

  private result: T;

  constructor(
    type: any,
    public readonly ctor: any = type,
    multi?: boolean
  ) {
    super(type, multi);
  }

  public provide(injector: Injector) {
    if (!this.result) {
      const depTypes = (this.ctor[Symbol.for('adk:dependencies')] || []);
      const deps = depTypes.map((depType) => injector.get(depType));

      this.result = Reflect.construct(this.ctor, deps);
    }
    return this.result;
  }

  public static isConfig(config: any): config is ClassProviderConfig {
    return config && config.provide && Reflect.has(config, 'useClass');
  }

  public static fromConfig(config: ClassProviderConfig): ClassProvider<any> {
    return new ClassProvider<any>(config.provide, config.useClass, config.multi);
  }
}
