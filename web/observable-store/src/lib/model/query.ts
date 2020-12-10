import {
  distinctUntilChanged,
  map,
  pluck
  } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReturnTypes } from '../interfaces';
import { Store } from './store';

export class Query<S> {

  public state$: Observable<S> = this.store.state$.pipe(
    pluck('state'),
    distinctUntilChanged());

  public pending$: Observable<boolean> = this.store.state$.pipe(
    pluck('pending'),
    distinctUntilChanged());

  public error$: Observable<any> = this.store.state$.pipe(
    pluck('error'),
    distinctUntilChanged());

  constructor(protected store: Store<S>) {}

  public get pending() {
    return this.store.pending;
  }

  public get error() {
    return this.store.error;
  }

  public get state() {
    return this.store.state;
  }

  public select<K extends keyof S>(key: K): Observable<S[K]>;
  public select<K extends keyof S>(keys: K[]): Observable<Pick<S, K>>;
  public select<R>(selectorFn: (store: S) => R): Observable<R>;
  public select<R extends [(state: S) => any] | Array<(state: S) => any>>(selectorFns: R): Observable<ReturnTypes<R>>;
  public select(): Observable<S>
  public select<R>(entry?: ((store: S) => R) | keyof S | (keyof S)[] | ((state: S) => any)[]): Observable<R | S | any[]> {
    return entry ?
      this.state$.pipe(
        distinctUntilChanged(this.compareKeys<any>(entry) as any),
        map((this.mapKeys(entry) as any))) :
      this.state$;
  }

  private mapKeys(keysOrFns: any | any[]) {
    return (state: S) => {
      if (typeof keysOrFns === 'function') {
        return keysOrFns(state);
      } else if (typeof keysOrFns === 'string') {
        return state[keysOrFns];
      } else if (Array.isArray(keysOrFns)) {
        if (typeof keysOrFns[0] === 'function') {
          return keysOrFns.map((func) => func(state));
        } else {
          return keysOrFns.reduce((result, key) => ({
            ...result,
            [key]: state[key]
          }), {});
        }
      } else {
        return state;
      }
    };
  }

  private compareKeys<K extends keyof S>(keysOrFns: any | any[]) {
    const compareKeys = Array.isArray(keysOrFns) ? keysOrFns : [keysOrFns];

    return (prev: S, curr: S): boolean => {
      const equals = !compareKeys.some((key) => 
        typeof key === 'function' ?
            key(prev) !== key(curr) :
            prev[key] !== curr[key]);

      return equals;
    }
  }
}