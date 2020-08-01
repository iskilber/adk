import * as React from 'react';
import { Injector } from '../injector';

export const InjectorContext: React.Context<Injector | undefined> =
  React.createContext<Injector | undefined>(undefined);

InjectorContext.displayName = 'InjectorContext';
