import { ITheme } from './theme.interface';

export interface IThemeList {
  version: string;
  default: string;
  items: ITheme[];
}