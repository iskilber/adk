export class InvalidCommandHandlerError extends Error {
  constructor(public readonly commandName: string) {
    super(`No command handler found for ${commandName} command!`);
  }
}