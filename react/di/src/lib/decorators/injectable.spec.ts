import { Injectable } from './injectable';
import 'reflect-metadata';

describe('Injectable', () => {
  it ('should mark and store dependecy types', () => {
    class DepA {}
    class DepB {}

    @Injectable()
    class Service {
      constructor(depA: DepA, depB: DepB) {}
    }

    const dependencies = Service[Symbol.for('adk:dependencies')];

    expect(dependencies[0]).toEqual(DepA);
    expect(dependencies[1]).toEqual(DepB);
  });
})

