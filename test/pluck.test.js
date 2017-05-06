const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array filled with undefined when the tested objects lack the tested property', () => {
    const people = [
      { name: 'Harriet' },
      { name: 'Lazarus' },
      { name: 'Bethany' }
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([undefined, undefined, undefined]);
  });

  it('returns an array of just ages, given an array of objects with age as the only property', () => {
    const people = [
      { age: 12 },
      { age: 999},
      { age: 14 }
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

});
