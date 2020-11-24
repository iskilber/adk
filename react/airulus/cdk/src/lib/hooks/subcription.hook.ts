import * as React from 'react';
import { Subscription } from 'rxjs';

export function useRxSubscription(clb: () => Subscription) {
  React.useEffect(() => {
    const subscription = clb();

    return () => subscription.unsubscribe();
  });
}
