const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any string contains the letter a', () => {
    const words = ['air', 'bird', 'climb', 'dog'];
    const result = _.some(words, word => _.indexOf(word, 'a') > -1);
    expect(result).toEqual(true);
  });

  it('returns false if no string contains the letter a', () => {
    const words = ['bird', 'climb', 'dog'];
    const result = _.some(words, word => _.indexOf(word, 'a') > -1);
    expect(result).toEqual(false);
  });

});
