import {
  CircularDependencyError,
  ProviderNotFoundError
  } from '../errors';
import { CURRENT_INJECTOR } from './injector.tokens';
import {
  getInjectionTypeName,
  setToArray
  } from '../helpers';
import {
  InjectionType,
  ProviderConfig
  } from './injector.types';
import {
  Provider, ClassProvider, ValueProvider, FactoryProvider,
  } from '../providers';

export class Injector {
  public static FLAG_OPTIONAL = 1;

  private providers: Map<InjectionType, Provider | Provider[]> = new Map();

  private depsLock: Set<InjectionType> = new Set();

  constructor(private parent?: Injector) {}

  public use(
    providerOrConfig: Provider | ProviderConfig | any | Array<Provider | ProviderConfig | any>
  ): this {
    const providers = Array.isArray(providerOrConfig) ? providerOrConfig : [providerOrConfig];

    for (const providerOrAny of providers) {
      let provider;

      if (providerOrAny instanceof Provider) {
        provider = providerOrAny;
      } else if (ClassProvider.isConfig(providerOrAny)) {
        provider = ClassProvider.fromConfig(providerOrAny);
      } else if (ValueProvider.isConfig(providerOrAny)) {
        provider = ValueProvider.fromConfig(providerOrAny);
      } else if (FactoryProvider.isConfig(providerOrAny)) {
        provider = FactoryProvider.fromConfig(providerOrAny);
      } else {
        provider = new ClassProvider(providerOrAny, providerOrAny);
      }

      if (provider.multi) {
        const providerArr =
            (this.providers.get(provider.injectionType) || []) as Array<Provider<any>>;
        providerArr.push(provider);
        this.providers.set(provider.injectionType, providerArr);
      } else {
        this.providers.set(provider.injectionType, provider);
      }
    }

    return this;
  }

  public spawnChildInjector() {
    return new Injector(this);
  }

  public has(token: any): boolean {
    return this.providers.has(token) ||
      (this.parent && this.parent.has(token));
  }

  public get<T>(tokens: any | any[], flag: number = -1): T {
    return (Array.isArray(tokens) ?
      tokens.map<any>((token) => this.resolve(token, flag)) :
      this.resolve<T>(tokens, flag)) as T;
  }

  private resolve<T>(token: any, flag: number = -1): T | T[] {
    if (this.depsLock.has(token)) {
      throw new CircularDependencyError(token, setToArray(this.depsLock));
    }
    this.depsLock.add(token);
    let dependency: any;

    if (token === CURRENT_INJECTOR) {
      dependency = this;
    } else if (this.providers.has(token)) {
      try {
        const provider = this.providers.get(token);
        if (Array.isArray(provider)) {
          dependency = provider.map((p) => p.provide(this));
        } else {
          dependency = provider.provide(this);
        }
        if (dependency === undefined) {
          console.warn(
            `Token "${getInjectionTypeName(token)}" returned "undefined"! Is that expected?`);
        }
      } catch (error) {
        this.depsLock.clear();
        throw error;
      }
    } else if (this.parent) {
      try {
        dependency = this.parent.get(token);
      } catch (error) {
        this.depsLock.clear();
        throw error;
      }
    } else {
      this.depsLock.clear();
      if (flag === Injector.FLAG_OPTIONAL) {
        return undefined as any;
      }
      throw new ProviderNotFoundError(token, setToArray(this.depsLock));
    }
    this.depsLock.clear();
    return dependency;
  }
}
