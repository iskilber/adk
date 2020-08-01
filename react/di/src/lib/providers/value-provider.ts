import {
  Injector,
  ValueProviderConfig
  } from '../injector';
import { Provider } from './provider';

export class ValueProvider<V> extends Provider<V> {
  private value: V;

  constructor(type: any, value: V, multi?: boolean) {
    super(type, multi);
    this.value = value;
  }

  public provide(injector: Injector) {
    return this.value;
  }

  public static isConfig(config: any): config is ValueProviderConfig {
    return config && config.provide && Reflect.has(config, 'useValue');
  }

  public static fromConfig(config: ValueProviderConfig): ValueProvider<any> {
    return new ValueProvider<any>(config.provide, config.useValue, config.multi);
  }
}
