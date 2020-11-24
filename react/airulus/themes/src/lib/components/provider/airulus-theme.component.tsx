import * as React from 'react';
import { AirulusThemeListState } from '../../state';
import {
  IAirulusTheme,
  IAirulusThemesOptions
  } from '../../model';
import { InjectorProvider } from '@adk/react/di';
import { map } from 'rxjs/operators';
import {
  useRxObservableState,
  useRxSubscription
  } from '@adk/airulus/cdk';

const styles = require('./airulus-theme-reset.scss');

export interface AirulusThemeProps {
  options: IAirulusThemesOptions;
}

export type AirulusThemeComponent = React.FC<AirulusThemeProps>

function useAirulusThemesRef(options: IAirulusThemesOptions): AirulusThemeListState {
  const ref = React.useRef(null);

  if (!ref.current) {
    ref.current = new AirulusThemeListState({ 
      themes: options.themes,
      currentThemeClassName: options.default
    })
  }
  return ref.current;
}

function createStylesheet(theme: IAirulusTheme) {
  const themeId = theme.className;

  if (document.getElementById(themeId)) {
    const stylesheet: HTMLLinkElement | null = document.getElementById(themeId) as any;
    if (stylesheet.href !== theme.url) {
      stylesheet.setAttribute('href', theme.url);
    }
  } else {
    const stylesheet = document.createElement('link');
    stylesheet.setAttribute('type', 'text/css');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', theme.url);
    stylesheet.id = theme.className;
    document.head.appendChild(stylesheet);
  }
}


/**
 * Download theme configuration files, allow to sitch between themes 
 * Create airulus theme css ui scope for theming variables.
 */
export const AirulusTheme: AirulusThemeComponent = (props) => {
  //useAirulusThemesLoader(props.options.themes);
  const airulusThemeState = useAirulusThemesRef(props.options);

  const providers: any = [
    {
      provide: AirulusThemeListState,
      useValue: airulusThemeState
    }
  ];

  useRxSubscription(() => airulusThemeState.themes$
      .pipe(
        map((themes) => themes.filter((theme) => {
          const themeLink: HTMLLinkElement | null = 
              document.getElementById(theme.className) as any;

          return !themeLink || themeLink.href !== theme.url;
        })))
      .subscribe((themes) => themes.forEach((theme) => createStylesheet(theme))));

  const currentClassName = useRxObservableState(
      airulusThemeState.currentThemeClassName,
      airulusThemeState.currentThemeClassName$);

  return (
    <InjectorProvider providers={providers}>
      <div className={currentClassName}>
        {props.children}
      </div>
    </InjectorProvider>);
};

AirulusTheme.displayName = 'AirulusTheme';

AirulusTheme.defaultProps = {};
