import { ClassProvider } from './class-provider';
import { Injectable } from '../decorators';
import { Injector } from '../injector';

describe ('ClassProvider', () => {
  it ('should resolve deps', () => {
    class DepA {}
    class DepB {}

    @Injectable()
    class Service {
      constructor(public depA: DepA, public depB: DepB) {}
    }
    const injector = new Injector();
    injector.use([
      new ClassProvider(DepA),
      new ClassProvider(DepB),
      new ClassProvider(Service)
    ]);

    const service = injector.get<Service>(Service);

    expect(service.depA).toBeInstanceOf(DepA);
    expect(service.depB).toBeInstanceOf(DepB);
  });

  it ('should keep difference between type and alias', () => {
    class ServiceA {}
    class ServiceB {}

    const provider = new ClassProvider(ServiceA, ServiceB);

    expect(provider.injectionType).toEqual(ServiceA);
    expect(provider.ctor).toEqual(ServiceB);
  });
});
