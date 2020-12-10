import { DocumentListStore } from './document-list.store';
import {
  IDocument,
  IDocumentList
  } from '@adk/common/documents';
import { Query } from './query';

export class DocumentListQuery<S extends IDocument> extends Query<IDocumentList<S>> {

  public items$ = this.select('items');

  public total$ = this.select('total');

  constructor(protected store: DocumentListStore<S>) {
    super(store);
  }
}
