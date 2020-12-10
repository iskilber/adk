import { IQuery } from '../interfaces';
import { RACOON_QUERY_HANDLER_METADATA } from '../cqrs.consts';
import 'reflect-metadata';

export const QueryHandler = (query: IQuery): ClassDecorator => {
  return (target: object) => {
    Reflect.defineMetadata(RACOON_QUERY_HANDLER_METADATA, query, target);
  };
};