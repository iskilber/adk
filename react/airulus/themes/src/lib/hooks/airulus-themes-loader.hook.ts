import * as React from 'react';
import { IAirulusTheme } from '../model';
import { merge } from 'rxjs';

export interface IAirulusThemesLoaderProps {
  themes: IAirulusTheme[];
  concurency?: number;
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

export function useAirulusThemesLoader(themes: IAirulusTheme[]) {
  React.useEffect(() => {
    themes.forEach((theme) => createStylesheet(theme));
  }, [themes]);
}
