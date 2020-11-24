import * as React from 'react';
import { Observable } from 'rxjs';
import { useRxSubscription } from './subcription.hook';

export function useRxObservableState<S>(initState: S, state$: Observable<S>) {
  const [state, setState] = React.useState(initState);

  useRxSubscription(() => state$.subscribe(setState));

  return state;
}
