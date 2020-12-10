import {
  Injectable,
  NgModuleRef
  } from '@angular/core';
import { InvalidQueryHandlerError } from '../errors';
import {
  IQuery,
  IQueryHandler
  } from '../interfaces';
import { IQueryResult } from '../interfaces/queries/query-result.interface';
import { Observable } from 'rxjs';
import { ObservableBus } from './observable-bus.service';
import {
  RACOON_CQRS_QUERIES,
  RACOON_QUERY_HANDLER_METADATA
  } from '../cqrs.consts';

@Injectable()
export class RacoonQueryBus<QueryBase extends IQuery = IQuery> {
  private handlers: Map<FunctionConstructor, IQueryHandler<QueryBase, IQueryResult>>;

  constructor(private moduleRef: NgModuleRef<any>) {}

  public query<Q extends QueryBase, QResult extends IQueryResult = IQueryResult>(query: Q): Observable<QResult> {
    if (!this.handlers) {
      this.handlers = this.buildHandlerMap();
    }
    const queryType = Object.getPrototypeOf(query).constructor;
    const queryHandler = this.handlers.get(queryType);

    if (!queryHandler) {
      throw new InvalidQueryHandlerError(queryType.name);
    }

    return queryHandler.query(query) as Observable<QResult>;
  }

  private buildHandlerMap() {
    return this.moduleRef.injector
        .get<Array<IQueryHandler<any, any>>>(RACOON_CQRS_QUERIES)
        .reduce(
          (map, handler) => this.registerHandler(map, handler), 
          new Map());
  }

  private registerHandler(
    map: Map<FunctionConstructor, IQueryHandler<any, any>>,
    handler: IQueryHandler<any>
  ) {
    const queryType = this.reflectQueryType(handler);
    map.set(queryType, handler);
    return map;
  }

  private reflectQueryType(commandHandler: IQueryHandler<any>): FunctionConstructor {
    const { constructor } = Object.getPrototypeOf(commandHandler);
    const commandType = Reflect.getMetadata(RACOON_QUERY_HANDLER_METADATA, constructor);

    return commandType;
  }
}
