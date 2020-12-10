/** Interface that can be used to generically type a class. */
export type IComponentType<T>  = new (...args: any[]) => T;