import * as React from 'react';
import { Injector } from '../injector';
import { InjectorContext } from './injector.context';
import { Provider } from '../providers';

export interface InjectorInitConfig {
  handler: (...args: any[]) => void;
  deps?: any[];
}

export interface InjectorProviderProps {
  providers?:
        ((injector: Injector) => Array<Provider<any>>) |
        Array<Provider<any>>;
  /**
   * Do not chain new injector to parent if exists.
   */
  skipParent?: boolean;

  /**
   * Tasks to be run on component init with injected dependencies.
   */
  initTasks?: InjectorInitConfig[];
}

export type InjectorProviderComponent = React.FC<InjectorProviderProps>;

export const InjectorProvider: InjectorProviderComponent = (props) => {
  // Fetch for parent InjectorProvider container to chain on it.
  const parent = React.useContext(InjectorContext);
  const injector = React.useRef<Injector | undefined>(undefined);
  let initializedRef = React.useRef(false);

  if (!injector.current) {
    injector.current = 
        new Injector(parent && !props.skipParent ? parent : undefined);

    if (props.providers) {
      if (typeof props.providers === 'function') {
        injector.current.use(props.providers(injector.current));
      } else {
        injector.current.use(props.providers);
      }
    }
  }

  if (!initializedRef.current) {
    initializedRef.current = true;
    if (props.initTasks) {
      props.initTasks.forEach((initHandler) => {
        const deps = (initHandler.deps || []).map(
              (depType) => injector.current.get(depType));
        Reflect.apply(initHandler.handler, this, deps);
      });
    }
  }

  return (
    <InjectorContext.Provider value={injector.current}>
      {props.children}
    </InjectorContext.Provider>
  );
}

InjectorProvider.displayName = 'InjectorProvider';
