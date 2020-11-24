import * as React from 'react';
import { useAirulusThemesList } from './airulus-themes-list.hook';

export function useSwitchAirulusThemeCallback() {
  const airulusThemeList = useAirulusThemesList();

  return React.useCallback((nextClassName: string) => {
    airulusThemeList.switchCurrentTheme(nextClassName);
  }, [airulusThemeList]);
}
