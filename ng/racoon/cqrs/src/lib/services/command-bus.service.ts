import {
  ICommand,
  ICommandHandler
  } from '../interfaces';
import {
  Injectable,
  NgModuleRef
  } from '@angular/core';
import { InvalidCommandHandlerError } from '../errors';
import { ObservableBus } from './observable-bus.service';
import {
  RACOON_COMMAND_HANDLER_METADATA,
  RACOON_CQRS_COMMANDS
  } from '../cqrs.consts';
import 'reflect-metadata';

@Injectable()
export class RacoonCommandBus<CommandBase extends ICommand = ICommand> extends ObservableBus<CommandBase> {

  private handlers: Map<FunctionConstructor, ICommandHandler<any>>;

  constructor(
    private moduleRef: NgModuleRef<any>
  ) {
    super();
  }

  public execute<T extends CommandBase, R = any>(command: T): Promise<R> {
    if (!this.handlers) {
      this.handlers = this.buildHandlerMap();
    }
    const commandType = Object.getPrototypeOf(command).constructor;
    const commandHandler = this.handlers.get(commandType);

    if (!commandHandler) {
      throw new InvalidCommandHandlerError(commandType.name);
    }

    return commandHandler.execute(command);
  }

  private buildHandlerMap() {
    return this.moduleRef.injector
        .get<Array<ICommandHandler<any>>>(RACOON_CQRS_COMMANDS)
        .reduce(
          (map, handler) => this.registerHandler(map, handler), 
          new Map());
  }

  private registerHandler(
    map: Map<FunctionConstructor, ICommandHandler<any>>,
    handler: ICommandHandler<any>
  ) {
    const commandType = this.reflectCommandType(handler);
    map.set(commandType, handler);
    return map;
  }

  private reflectCommandType(commandHandler: ICommandHandler<any>): FunctionConstructor {
    const { constructor } = Object.getPrototypeOf(commandHandler);
    const commandType = Reflect.getMetadata(RACOON_COMMAND_HANDLER_METADATA, constructor);

    return commandType;
  }
}