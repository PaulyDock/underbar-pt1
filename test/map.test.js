_ = require('../underbar');

describe('map()', () => {
  it('maps every number in an array of numbers to its square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every word in an array of strings to itself in all uppercase', () => {
    const arr = ['air', 'bird', 'cat', 'dog'];
    const mappedArr = _.map(arr, function(el) {
      return el.toUpperCase();
    });
    expect(mappedArr).toEqual(['AIR', 'BIRD', 'CAT', 'DOG']);
  });

});
