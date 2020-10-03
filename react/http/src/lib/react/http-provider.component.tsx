import * as React from 'react';
import {
  FactoryProvider,
  InjectorProvider
  } from '@adk/react/di';
import { HttpClient } from '../http-client';
import { HttpClientDefaults } from '../http-client.types';

export declare namespace HttpClientProvider {
  interface Props extends Partial<HttpClientDefaults> {

  }
  type Component = React.FunctionComponent<Props>;
}

export const HttpClientProvider: HttpClientProvider.Component = ({ children, ...props}) => {
  const providers = React.useCallback(() => [
    new FactoryProvider(HttpClient, () => new HttpClient(props))
  ], []);

  return (
    <InjectorProvider providers={providers}>
      {children}
    </InjectorProvider>
  );
};

HttpClientProvider.displayName = 'HttpClientProvider';

HttpClientProvider.defaultProps = {};
