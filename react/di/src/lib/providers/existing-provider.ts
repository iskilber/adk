import {
  ExistingProviderConfig,
  Injector
  } from '../injector';
import { Provider } from './provider';

export class ExistingProvider<T> extends Provider<T> {
  constructor(
    type: any,
    public readonly alias: any,
    multi?: boolean
  ) {
    super(type, multi);
  }

  public provide(injector: Injector) {
    return injector.get<T>(this.alias);
  }

  public static isConfig(config: any): config is ExistingProviderConfig {
    return config && config.useExisting && config.provide;
  }

  public static fromConfig(config: ExistingProviderConfig): ExistingProvider<any> {
    return new ExistingProvider<any>(
      config.provide,
      config.useExisting,
      config.multi);
  }
}
