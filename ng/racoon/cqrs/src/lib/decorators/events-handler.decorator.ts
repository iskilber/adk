import { IEvent } from '../interfaces';
import { RACOON_EVENTS_HANDLER_METADATA } from '../cqrs.consts';
import 'reflect-metadata';

export const EventsHandler = (...events: IEvent[]): ClassDecorator => {
  return (target: object) => {
    Reflect.defineMetadata(RACOON_EVENTS_HANDLER_METADATA, events, target);
  }
}
