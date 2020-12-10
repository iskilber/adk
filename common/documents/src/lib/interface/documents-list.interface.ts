import { IDocument } from './document.interface';
import { IDocumentListFilter } from './document-list.filters.interface';

export interface IDocumentList<
  D extends IDocument, 
  F extends IDocumentListFilter = IDocumentListFilter
> {
  items: D[];
  total: number;
  filter?: F;
}
