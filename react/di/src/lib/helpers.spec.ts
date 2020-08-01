import {
  getInjectionTypeName,
  setToArray
  } from './helpers';

describe('getInjectionTypeName()', () => {
  it ('should get string name for string', () => {
    expect(getInjectionTypeName('TOKEN')).toEqual('TOKEN');
  });

  it ('should get function name', () => {
    const dep = function foo() {};

    expect(getInjectionTypeName(dep)).toEqual('foo');
  });

  it ('should get class name', () => {
    class Foo {}

    expect(getInjectionTypeName(Foo)).toEqual('Foo');
  });

  it ('should get "null" if null provided', () => {
    expect(getInjectionTypeName(null)).toEqual('null');
  });

  it ('should get "undefined" if null provided', () => {
    expect(getInjectionTypeName(undefined)).toEqual('undefined');
  });

  it ('should get symbol name if provided', () => {
    const token = Symbol('TOKEN');

    expect(getInjectionTypeName(token)).toEqual('Symbol(TOKEN)');
  });

  it ('should get "Object" if literal object provided', () => {
    expect(getInjectionTypeName({})).toEqual('InstanceOf(Object)');
  });

  it ('should get name of an instance', () => {
    class Foo {};
    const foo = new Foo();
    expect(getInjectionTypeName(foo)).toEqual('InstanceOf(Foo)');
  });
});

describe('setToArray', () => {
  it ('should convert set to array', () => {
    const s = new Set(['a', 'b', 'c']);
    const sArr = setToArray(s);

    expect(sArr).toStrictEqual(['a', 'b', 'c']);
    expect(sArr.length).toEqual(3);
  });
});
