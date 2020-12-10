import { IQuery } from './query.interface';
import { Observable } from 'rxjs';

export interface IQueryHandler<T extends IQuery = any, TRes = any> {
  query(query: T): Observable<TRes>;
}
