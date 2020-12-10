import {
  BehaviorSubject,
  from,
  Observable,
  throwError
  } from 'rxjs';
import {
  catchError,
  finalize,
  map,
  switchMap,
  tap
  } from 'rxjs/operators';
import {
  IStoreState,
  IStoreUpdateCallback
  } from '../interfaces';

export class Store<S = any> {

  public readonly state$: BehaviorSubject<IStoreState<S>>;

  constructor(iniState?: S) {
    this.state$ = new BehaviorSubject({
      state: iniState,
      pending: false,
      error: null
    });
  }

  public get state(): S {
    return this.state$.getValue().state;
  }

  public get pending(): boolean {
    return this.state$.getValue().pending;
  }

  public get error(): any {
    return this.state$.getValue().error;
  }

  public set pending(pending: boolean) {
    const currentState = this.state$.getValue();

    this.state$.next({ ...currentState, pending });
  }

  public set error(error: any) {
    const currentState = this.state$.getValue();

    this.state$.next({ ...currentState, error });
  }

  public update(callback: IStoreUpdateCallback<S>)
  public update(state: Partial<S>)
  public update(state$: Observable<Partial<S>>)
  public update(stateOrCallback: Partial<S> | IStoreUpdateCallback<S> | Observable<Partial<S>>): Promise<S> {
    const currentState = this.state$.getValue();
    if (stateOrCallback instanceof Observable) {
      this.pending = true;
      return stateOrCallback
        .pipe(
          switchMap((patch) => from<Promise<S>>(this.update(patch))),
          catchError((error) => {
            this.error = error;
            return throwError(error)
          }),
          finalize(() =>  this.pending = false))
        .toPromise<S>()
    } else if (typeof stateOrCallback === 'function') {
      const nextState = stateOrCallback(currentState.state);
      this.state$.next({
        ...currentState,
        state: nextState
      });
      return Promise.resolve(nextState);
    } else {
      const nextState = {
        ...currentState.state,
        ...stateOrCallback
      };
      this.state$.next({
        ...currentState,
        error: null,
        state: nextState
      });
      return Promise.resolve(nextState)
    }
  }
}
