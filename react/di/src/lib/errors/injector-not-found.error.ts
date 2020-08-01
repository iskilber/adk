
export class InjectorNotFoundError extends Error {
  constructor() {
    super('Any injector not found in current React.context!');
  }
}