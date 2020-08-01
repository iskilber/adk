import { getInjectionTypeName } from '../helpers';

export class CircularDependencyError extends Error {

  constructor(injectionType: any, depsLock: any[] = []) {
    super(
      '[{code}] Circular dependecy occured! ' +
      `${depsLock.map(getInjectionTypeName).join(' -> ')} -> ` +
      `${getInjectionTypeName(injectionType)}`);
  }
}
