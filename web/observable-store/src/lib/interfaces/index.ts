export * from './store-state.interface';
export * from './store-update-callback';

export type ArrayFuncs = ((...a: any[]) => any)[];
export type ReturnTypes<T extends ArrayFuncs> = { [P in keyof T]: T[P] extends (...a: any[]) => infer R ? R : never };