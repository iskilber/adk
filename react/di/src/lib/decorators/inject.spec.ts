import { Inject } from './inject';
import { Injectable } from './injectable';
import { Injector } from '../injector';

describe ('inject', () => {
  it ('should work', () => {
    const TOKEN = 'DI.TOKEN';

    @Injectable()
    class Service {
      constructor(
        @Inject(TOKEN)
        public foo: string
      ) {}
    }

    const injector = new Injector();
    injector.use([
      { provide: TOKEN, useValue: 'abcd' },
      Service
    ]);

    const service = injector.get<Service>(Service);

    expect(service.foo).toEqual('abcd');
  })
});