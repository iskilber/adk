import {
  CircularDependencyError,
  ProviderNotFoundError
  } from '../errors';
import {
  ClassProvider,
  FactoryProvider,
  ValueProvider
  } from '../providers';
import { Injectable } from '../decorators';
import { Injector } from './injector';

describe('Injector', () => {
  it ('should get value by token', () => {
    const Token = Symbol('TOKEN');
    const value = 'foo';
    const valueProvider = new ValueProvider(Token, value);
    const injector = new Injector();
    injector.use(valueProvider);

    expect(injector.get(Token)).toEqual('foo');
  });

  it ('should resolve value with dependencies', () => {
    const DEP_1 = Symbol('DEP_1');
    const DEP_2 = Symbol('DEP_2');
    const dep1Provider = new FactoryProvider(DEP_1, () => 'foo');
    const dep2Provider = new FactoryProvider(DEP_2, (dep1) => dep1, [DEP_1]);
    const injector = new Injector()
      .use(dep1Provider)
      .use(dep2Provider);

    expect(injector.get(DEP_2)).toEqual('foo');
  });

  it ('should throw a circular dependency error', () => {
    const DEP_1 = Symbol('DEP_1');
    const DEP_2 = Symbol('DEP_2');
    const DEP_3 = Symbol('DEP_3');
    const dep1Provider = new FactoryProvider(DEP_1, (dep3) => dep3, [DEP_3]);
    const dep2Provider = new FactoryProvider(DEP_2, (dep1) => dep1, [DEP_1]);
    const dep3Provider = new FactoryProvider(DEP_3, (dep1) => dep1, [DEP_2]);
    const injector = new Injector()
      .use(dep1Provider)
      .use(dep2Provider)
      .use(dep3Provider);

    expect(() => injector.get(DEP_3)).toThrowError(CircularDependencyError);
  });

  it ('should resolve only once', () => {
    const DEP_1 = Symbol('DEP_1');
    const factoryMark = jest.fn();
    const factory = () => {
      factoryMark();
      return 'foo';
    }
    const dep1Provider = new FactoryProvider(DEP_1, factory);
    const injector = new Injector()
      .use(dep1Provider);
    injector.get(DEP_1);
    injector.get(DEP_1);

    expect(factoryMark).toBeCalledTimes(1);
  });

  it ('should provide depenendency from parent', () => {
    const DEP_1 = Symbol('DEP_1');
    const parent = new Injector();
    const child = parent.spawnChildInjector();    
    const dep1Provider = new FactoryProvider(DEP_1, () => 'foo');
    parent.use(dep1Provider);

    expect(child.get(DEP_1)).toEqual('foo');
  });

  it ('should not use deps from child if taken from parent', () => {
    const DEP_1 = Symbol('DEP_1');
    const DEP_2 = Symbol('DEP_2');
    const parent = new Injector();
    const child = parent.spawnChildInjector();    
    const dep1Provider = new FactoryProvider(DEP_1, () => 'foo', [DEP_2]);
    const dep2Provider = new ValueProvider(DEP_2, 'dep2');
    parent.use(dep1Provider);
    child.use(dep2Provider);

    expect(() => child.get(DEP_1)).toThrowError(ProviderNotFoundError);
  });

  it ('should by default go to Class Provider', () => {
    class DepA {}
    class DepB {}

    @Injectable()
    class Service { 
      constructor(public depA: DepA, public depB: DepB) {}
    }

    const injector = new Injector();
    injector.use([
      DepA,
      DepB,
      Service
    ]);
    const service = injector.get<Service>(Service);

    expect(service.depA).toBeInstanceOf(DepA);
    expect(service.depB).toBeInstanceOf(DepB);
  });

  it ('should provide another class under alias', () => {
    class ServiceA {}
    class ServiceB {}

    const injector = new Injector();
    injector.use([new ClassProvider(ServiceA, ServiceB)]);

    const service = injector.get(ServiceA);

    expect(service).toBeInstanceOf(ServiceB);
  });

  it ('should provide anoter class under alias with provider config', () => {
    class ServiceA {}
    class ServiceB {}

    const injector = new Injector();
    injector.use([{ provide: ServiceA, useClass: ServiceB }]);

    const service = injector.get(ServiceA);

    expect(service).toBeInstanceOf(ServiceB);
  });

  it ('should provide a value set by provider config', () => {
    const injector = new Injector();
    injector.use([{ provide: 'A', useValue: 'Foo'}]);

    const value = injector.get('A');
    expect(value).toBe('Foo')
    
  });
});