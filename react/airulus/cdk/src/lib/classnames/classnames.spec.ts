import { classnames } from './classnames';

describe('classnames', () => {
  it ('should return join string', () => {
    expect(classnames('a', 'b', 'c')).toBe('a b c');
  });

  it ('should return some classes only', () => {
    expect(classnames({'a': true, 'b': true, 'c': false})).toBe('a b');
  });

  it ('should handle multiple objects together', () => {
    expect(classnames({'a': true, 'b': true}, {'c': true})).toBe('a b c');
  });

  it ('should handle mixed types together', () => {
    expect(classnames({'a': true, 'b': true}, 'c')).toBe('a b c');
  });

  it ('should ignore undefined', () => {
    expect(classnames('a', 'b', undefined)).toBe('a b');
  });
});
