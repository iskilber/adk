import {
  IEvent,
  IEventHandler
  } from '../interfaces';
import {
  Injectable,
  InjectFlags,
  NgModuleRef
  } from '@angular/core';
import {
  RACOON_CQRS_EVENTS,
  RACOON_EVENTS_HANDLER_METADATA
  } from '../cqrs.consts';

@Injectable()
export class RacoonEventBus {

  private handlers: Map<FunctionConstructor, Array<IEventHandler<any>>>;

  constructor(
    private readonly moduleRef: NgModuleRef<any>
  ) {}

  public dipatch(event: IEvent) {
    if (!this.handlers) {
      this.handlers = this.buildHandlerMap();
    }
    const eventType = Object.getPrototypeOf(event).constructor;
    const eventHandlers = this.handlers.get(eventType) || [];

    eventHandlers.forEach((eventHandler) => eventHandler.handle(event));
  }

  private buildHandlerMap() {
    return this.moduleRef.injector
      .get<Array<IEventHandler<any>>>(RACOON_CQRS_EVENTS, [], InjectFlags.Optional)
      .reduce(
        (map, handler) => this.registerHandler(map, handler), 
        new Map());
  }

  private registerHandler(
    map: Map<FunctionConstructor, Array<IEventHandler<any>>>,
    handler: IEventHandler<any>
  ) {
    const eventType = this.reflectEventType(handler);
    if (!map.has(eventType)) {
      map.set(eventType, []);
    }
    map.get(eventType).push(handler);
    return map;
  }

  private reflectEventType(eventHandler: IEventHandler<any>): FunctionConstructor {
    const { constructor } = Object.getPrototypeOf(eventHandler);
    const eventType = Reflect.getMetadata(RACOON_EVENTS_HANDLER_METADATA, constructor);

    return eventType;
  }
}
