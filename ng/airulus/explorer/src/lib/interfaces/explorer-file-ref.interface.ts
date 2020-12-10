export interface IExplorerDirectoryRecord {
  contentType: string;
  type: 'file' | 'directory';
  name: string;
  fileRef: string;
  path: string[];
  pathname: string;
  extension?: string;
  lastModified?: Date | number;
  size?: number;
}