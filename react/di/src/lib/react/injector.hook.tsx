import * as React from 'react';
import { Injector } from '../injector';
import { InjectorContext } from './injector.context';
import { InjectorNotFoundError } from '../errors';

export function useInjector(): Injector {
  const injector = React.useContext<Injector>(InjectorContext);

  if (!injector) {
    throw new InjectorNotFoundError();
  }

  return injector;
}

export function useInject<D>(...injectionTokens: any[]): D {
  const injector = useInjector();
  const resolvedRef = React.useRef<D | undefined>();

  if (!resolvedRef.current) {
    resolvedRef.current = injectionTokens
        .map((token) => injector.get(token)) as any;
  }

  return injectionTokens.length === 1 ?
    resolvedRef.current[0] :
    resolvedRef.current;
}

export function useProvide(providerOrConfig: any) {
  const injector = useInjector();
  const isProvidedRef = React.useRef(false);
  if (!isProvidedRef.current) {
    isProvidedRef.current = true;
    injector.use(providerOrConfig);
  }
}
