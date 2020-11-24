import * as React from 'react';
import { AirulusIntlError } from './intl-error/intl-error.component';
import { AirulusIntlState } from '../state';
import { IAirulusIntlOptions } from '../model';
import { InjectorProvider } from '@adk/react/di';
import { IntlProvider } from 'react-intl';
import { useRxObservableState } from '@adk/airulus/cdk';

function useAirulusIntlStateRef(options: IAirulusIntlOptions): AirulusIntlState {
  const ref = React.useRef(null);

  if (!ref.current) {
    ref.current = new AirulusIntlState(options.entries);
  }
  return ref.current;
}

export interface IAirulusIntlProviderProps {
  options: IAirulusIntlOptions;
}

export const AirulusIntlProvider: React.FC<IAirulusIntlProviderProps> = (props) => {
  const state = useAirulusIntlStateRef(props.options);
  const { 
    error, 
    currentMessages, 
    currentLocale 
  } = useRxObservableState(state.getValue(), state);

  const providers: any = [
    { provide: AirulusIntlState, useValue: state }
  ];
  
  React.useEffect(() => {
    state.currentLocale = props.options.defaultLocale;
  }, []);

  return (
    <InjectorProvider providers={providers}>
      <AirulusIntlError error={error} />
      {currentLocale && <IntlProvider locale={currentLocale} messages={currentMessages}>
        {props.children}
      </IntlProvider>}
    </InjectorProvider>
  );
};

AirulusIntlProvider.displayName = 'AirulusIntlProvider';

AirulusIntlProvider.defaultProps = {};
