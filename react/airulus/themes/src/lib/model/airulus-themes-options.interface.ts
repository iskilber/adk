import { IAirulusTheme } from './airulus-theme.interface';

export interface IAirulusThemesOptions {
  themes: IAirulusTheme[];
  /**
   * Default theme name
   */
  default: string;
}
