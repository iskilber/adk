import {
  IDocument,
  IDocumentList,
  IDocumentListFilter
  } from '@adk/common/documents';
import {
  map,
  switchMap
  } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from './store';

export class DocumentListStore<D extends IDocument> extends Store<IDocumentList<D>> {

  public static APPEND = true;

  public static PREPEND = false;

  public static EMPTY = { total: 0, items: [], filter: { offset: 0, limit: 0 }}

  constructor(init: IDocumentList<D> = DocumentListStore.EMPTY) {
    super(init)
  }

  public get filter(): IDocumentListFilter | undefined {
    return this.state.filter;
  }

  /**
   * Add new entries at the end of an array
   */
  public add(increment: IDocumentList<D>, append?: boolean): Promise<IDocumentList<D>>;
  /**
   * Expects observable to return a list as an increment. With actual total and
   * filter numbers but only with newly created entries in items array.
   * 
   * @param document$ 
   */
  public add(document$: Observable<IDocumentList<D>>, append?: boolean): Promise<IDocumentList<D>>; 
  public add(
    documentOrObservable: IDocumentList<D> | Observable<IDocumentList<D>>, 
    append = DocumentListStore.APPEND
  ): Promise<IDocumentList<D>> {
    return documentOrObservable instanceof Observable ?
      this.update(documentOrObservable.pipe(
        map((increment) => this.mergeListIncrement(increment, append))
      )) :
      this.update(this.mergeListIncrement(documentOrObservable, append));
  }

  private mergeListIncrement(increment: IDocumentList<D>, append: boolean) {
    const prevState = this.state;
    const prevFilter = this.filter;
    const nextItems = append ? 
      [ ...prevState.items, ...increment.items ] :
      [ ...increment.items, ...prevState.items ];
    const nextFilters = increment.filter ?
      { ...(prevFilter || {}), ...increment.filter } :
      prevFilter;

    const nextState: IDocumentList<D> = {
      total: increment.total,
      items: nextItems,
      filter: nextFilters
    }

    return nextState;
  }
}
