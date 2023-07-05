const pick = require('../../../src/utils/pick');

describe('pick', () => {
  it('should return an object with picked properties', () => {
    const object = {
      name: 'John',
      age: 30,
      city: 'New York',
      country: 'USA',
    };

    const keys = ['name', 'age'];

    const result = pick(object, keys);

    expect(result).toEqual({
      name: 'John',
      age: 30,
    });
  });

  it('should return an empty object if no properties are picked', () => {
    const object = {
      name: 'John',
      age: 30,
      city: 'New York',
      country: 'USA',
    };

    const keys = [];

    const result = pick(object, keys);

    expect(result).toEqual({});
  });

  it('should return an empty object if the input object is null or undefined', () => {
    const object1 = null;
    const object2 = undefined;

    const keys = ['name', 'age'];

    const result1 = pick(object1, keys);
    const result2 = pick(object2, keys);

    expect(result1).toEqual({});
    expect(result2).toEqual({});
  });

  it('should not include properties that are not present in the input object', () => {
    const object = {
      name: 'John',
      age: 30,
    };

    const keys = ['name', 'age', 'city'];

    const result = pick(object, keys);

    expect(result).toEqual({
      name: 'John',
      age: 30,
    });
  });
});
