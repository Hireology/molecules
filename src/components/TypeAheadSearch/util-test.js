import PropTypes from 'prop-types';
import * as util from './util';

// mock out prop types functionality, we can trust that checkPropTypes
// works the way we expect it to, we just want to test that it is called
jest.mock('prop-types', () => ({
  checkPropTypes: jest.fn(),
  string: { isRequired: true },
  number: { isRequired: true },
  func: { isRequired: true },
  shape: () => null,
  arrayOf: () => ({ isRequired: true }),
}));

describe('util', () => {
  beforeEach(() => {
    PropTypes.checkPropTypes.mockClear();
  });

  describe('filterData', () => {
    it('correctly filters the data', () => {
      const fakeData = [
        { value: 'foo bar' },
        { value: 'bar Foo' },
        { value: 'barfoo' },
        { value: 'foobar' },
        { value: 'anythingelse' },
      ];

      const filteredData = util.filterData(fakeData, ' foo ');

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

      const sortedData = util.sortFilteredData(fakeData, ' Foo ');

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

      const sortedData = util.sortFilteredData(fakeData, 'Foo');

      const expectedData = [{ value: 'Foo bar', id: 0 }];
      expect(sortedData).toEqual(expectedData);
    });
  });

  describe('customOnChangeValidator', () => {
    it('calls checkPropTypes if useCustomFilter is true', () => {
      const props = { useCustomFilter: true };
      util.customOnChangeValidator(props, 'data', 'TypeAheadSearch');
      expect(PropTypes.checkPropTypes.mock.calls.length).toBe(1);
    });
    it('does not call checkPropTypes if useCustomFilter is false', () => {
      const props = { useCustomFilter: false };
      util.customOnChangeValidator(props, 'data', 'TypeAheadSearch');
      expect(PropTypes.checkPropTypes.mock.calls.length).toBe(0);
    });
  });

  describe('customSuggestionsValidator', () => {
    it('calls checkPropTypes if useCustomFilter is true', () => {
      const props = { useCustomFilter: true };
      util.customSuggestionsValidator(props, 'data', 'TypeAheadSearch');
      expect(PropTypes.checkPropTypes.mock.calls.length).toBe(1);
    });
    it('does not call checkPropTypes if useCustomFilter is false', () => {
      const props = { useCustomFilter: false };
      util.customSuggestionsValidator(props, 'data', 'TypeAheadSearch');
      expect(PropTypes.checkPropTypes.mock.calls.length).toBe(0);
    });
  });
});
