const _ = require('../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Thokul Mongothsbeard',
      honorific: 'Lord Thokul Mongothsbeard the Arcane',
      race: 'human',
      class: 'druid',
      strength: 4,
      constitution: 7,
      dexterity: 10,
      intelligence: 16,
      wisdom: 5,
      charisma: 4
    };

    const abilityScores = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(abilityScores).toEqual([4, 7, 10, 16, 5, 4]);
  });

  it('returns the original array if all elements pass', () => {
    const evenNums = [2, 4, 6, 8, 10];
    expect(_.filter(evenNums, num => num % 2 === 0)).toEqual(evenNums);
  });

  it('returns an empty array if all elements fail', () => {
    const evenNums = [2, 4, 6, 8, 10];
    expect(_.filter(evenNums, num => num % 2 === 1)).toEqual([]);
  });
  
});