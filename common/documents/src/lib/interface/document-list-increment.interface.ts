import { IDocumentListFilter } from './document-list.filters.interface';

export interface IDocumentListIncrement<F extends IDocumentListFilter = IDocumentListFilter> {
  total: number;
  filter: F;
  inc
}