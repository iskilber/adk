export abstract class InjectionToken<T> {
  public value: T;
}

export const APP_ENV_TOKEN = Symbol('app.env');

export const CURRENT_INJECTOR = Symbol('current.injector');
