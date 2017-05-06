const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of words', () => {
    const words = ['air', 'bird', 'cat', 'air', 'dog', 'bird', 'elephant'];
    expect(_.uniq(words)).toEqual(['air', 'bird', 'cat', 'dog', 'elephant']);
  });
});