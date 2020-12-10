import { IExplorerDirectoryRecord } from './explorer-file-ref.interface';

export interface IExplorerDirectory {
  path: string[];
  pathname: string;
  records: IExplorerDirectoryRecord[];
  offset?: number;
  start?: number;
  total?: number;
}