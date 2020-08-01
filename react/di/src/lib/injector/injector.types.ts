import { InjectionToken } from './injector.tokens';

export type InjectionType = string | symbol | InjectionToken<any>;

export interface ClassProviderConfig {
  provide: any;
  useClass: any;
  multi?: any;
}

export interface ValueProviderConfig {
  provide: any;
  useValue: any;
  multi?: any;
}

export interface FactoryProviderConfig {
  provide: any;
  useFactory: (...args: any[]) => any;
  deps: any[];
  multi?: any;
}

export interface ExistingProviderConfig {
  provide: any;
  existing: any;
  multi?: any;
}

export type ProviderConfig = 
    ClassProviderConfig | 
    ValueProviderConfig | 
    FactoryProviderConfig | 
    ExistingProviderConfig;


