const _ = require('../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 10
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'foo': 'bar'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });

  it('returns false for an iterable-appearing object without a length property', () => {
    const iterableAppearingObjLackingLength = {
      '1': 'one',
      '2': 'two',
      '3': 'three'
    };
    expect(_.isArrayLike(iterableAppearingObjLackingLength)).toBe(false);
  });
});
