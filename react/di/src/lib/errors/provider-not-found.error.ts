import { getInjectionTypeName } from '../helpers';

export class ProviderNotFoundError extends Error {
  constructor(injectionType: any, depsChain?: any[]) {
    super(
      `[{code}] Provider of "${getInjectionTypeName(injectionType)}" ` +
      'not found in injector!' +
      `\n ${depsChain.map(getInjectionTypeName).join(' -> ')}`);
  }
}
