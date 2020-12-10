export class InvalidQueryHandlerError extends Error {
  constructor(public readonly queryName: string) {
    super(`No query handler found for ${queryName} command!`);
  }
}