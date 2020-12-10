import { ICommand } from '../interfaces';
import { RACOON_COMMAND_HANDLER_METADATA } from '../cqrs.consts';
import 'reflect-metadata';

export const CommandHandler = (command: ICommand): ClassDecorator => {
  return (target: object) => {
    Reflect.defineMetadata(RACOON_COMMAND_HANDLER_METADATA, command, target);
  }
}
