import { filterData, sortFilteredData } from './util';

describe('util', () => {
  describe('filterData', () => {
    it('correctly filters the data', () => {
      const fakeData = [
        { value: 'foo bar' },
        { value: 'bar Foo' },
        { value: 'barfoo' },
        { value: 'foobar' },
        { value: 'anythingelse' },
      ];

      const filteredData = filterData(fakeData, 'foo');

      const expectedData = [
        { value: 'foo bar' },
        { value: 'bar Foo' },
        { value: 'foobar' },
      ];
      expect(filteredData).toEqual(expectedData);
    });
  });

  describe('sortFilteredData', () => {
    it('correctly sorts the filtered data', () => {
      const fakeData = [
        { value: 'Foo bar' },
        { value: 'foo bar' },
        { value: 'foobar' },
        { value: 'abc Foo' },
        { value: 'Foo abc' },
        { value: 'bar foo' },
        { value: 'bar food' },
        { value: 'bar Foo' },
      ];

      const sortedData = sortFilteredData(fakeData, 'Foo');

      const expectedData = [
        { value: 'Foo abc' },
        { value: 'Foo bar' },
        { value: 'abc Foo' },
        { value: 'bar Foo' },
        { value: 'foo bar' },
        { value: 'foobar' },
        { value: 'bar foo' },
        { value: 'bar food' },
      ];
      expect(sortedData).toEqual(expectedData);
    });
    it('does not return duplicate suggestion texts', () => {
      const fakeData = [
        { value: 'Foo bar', id: 0 },
        { value: 'Foo bar', id: 1 },
      ];

      const sortedData = sortFilteredData(fakeData, 'Foo');

      const expectedData = [{ value: 'Foo bar', id: 0 }];
      expect(sortedData).toEqual(expectedData);
    });
  });
});
