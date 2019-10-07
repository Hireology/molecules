import React from 'react';
import { shallow } from 'enzyme';
import { filterData, sortFilteredData } from './util';
import TypeAheadSearch from './TypeAheadSearch';

jest.mock('./util');

const getProps = (overrides) => ({
  onSubmit: () => null,
  initialFilter: '',
  placeholder: '',
  useCustomFilter: false,
  data: [],
  onChange: () => null,
  suggestions: [],
  ...overrides,
});

const getState = (overrides) => ({
  filter: 'some',
  suggestions: [{ value: 'some suggestion', id: 0 }],
  activeSuggestionIndex: 0,
  ...overrides,
});

describe('TypeAheadSearch', () => {
  beforeEach(() => {
    filterData.mockClear();
    sortFilteredData.mockClear();
  });

  it('renders a magnifying glass', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    expect(wrapper.find('[data-test="magnifying-glass"]').length).toBe(1);
  });
  it('renders a search input', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    expect(wrapper.find('[data-test="search-input"]').length).toBe(1);
  });
  it('passes through the placeholder', () => {
    const props = getProps({ placeholder: 'placeholder' });
    const wrapper = shallow(<TypeAheadSearch {...props} />);
    expect(wrapper.find('[data-test="search-input"]').props().placeholder).toBe(
      'placeholder',
    );
  });
  it('sets the value to the initialFilter if it is defined', () => {
    const props = getProps({ initialFilter: 'initialFilter' });
    const wrapper = shallow(<TypeAheadSearch {...props} />);
    expect(wrapper.find('[data-test="search-input"]').props().value).toBe(
      'initialFilter',
    );
  });
  it('does not render the dropdown initially', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    expect(wrapper.find('[data-test="type-ahead-dropdown"]').length).toBe(0);
  });
  it('does not render the dropdown initially', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    expect(wrapper.find('[data-test="type-ahead-dropdown"]').length).toBe(0);
  });
  it('renders the dropdown if there are suggestions in state and the filter length is greater then 1', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    wrapper.setState({
      suggestions: [{ value: 'test', id: 1 }],
      filter: 'test',
    });
    expect(wrapper.find('[data-test="type-ahead-dropdown"]').length).toBe(1);
  });
  it('renders the dropdown if there are suggestions passed as props and the filter length is greater then 1', () => {
    const props = getProps({
      suggestions: [{ value: 'test', id: 1 }],
      useCustomFilter: true,
    });
    const wrapper = shallow(<TypeAheadSearch {...props} />);
    wrapper.setState({
      filter: 'test',
    });
    expect(wrapper.find('[data-test="type-ahead-dropdown"]').length).toBe(1);
  });
  it('correctly renders the suggestion text if the matching text is at the beginning of the string', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    wrapper.setState({
      filter: 'te',
      suggestions: [{ value: 'testing', id: 1 }],
    });
    const suggestionText = wrapper.find('[data-test="suggestion-text"]');
    expect(suggestionText.text()).toBe('testing');
    expect(suggestionText.html()).toBe(
      '<span data-test="suggestion-text"><b>te</b>sting</span>',
    );
  });
  it('correctly renders the suggestion text if the matching text is in the middle of the string', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    wrapper.setState({
      filter: 'lon',
      suggestions: [{ value: 'This is a long suggestion', id: 1 }],
    });
    const suggestionText = wrapper.find('[data-test="suggestion-text"]');
    expect(suggestionText.text()).toBe('This is a long suggestion');
    expect(suggestionText.html()).toBe(
      '<span data-test="suggestion-text">This is a <b>lon</b>g suggestion</span>',
    );
  });
  it('correctly renders the suggestion text if the matching text is in the end of the string', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    wrapper.setState({
      filter: 'Eskro',
      suggestions: [{ value: 'Maria Eskro', id: 1 }],
    });
    const suggestionText = wrapper.find('[data-test="suggestion-text"]');
    expect(suggestionText.text()).toBe('Maria Eskro');
    expect(suggestionText.html()).toBe(
      '<span data-test="suggestion-text">Maria <b>Eskro</b></span>',
    );
  });
  it('correctly renders the suggestion text if there is no match (happens as the user types before custom suggestions are returned)', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    wrapper.setState({
      filter: 'Mariah',
      suggestions: [{ value: 'Maria Eskro', id: 1 }],
    });
    const suggestionText = wrapper.find('[data-test="suggestion-text"]');
    expect(suggestionText.text()).toBe('Maria Eskro');
    expect(suggestionText.html()).toBe(
      '<span data-test="suggestion-text">Maria Eskro</span>',
    );
  });
  it('adds the active class to the suggestion with the active selected index', () => {
    const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
    wrapper.setState({
      activeSuggestionIndex: 1,
      suggestions: [
        { value: 'ab', id: 123 },
        { value: 'abc', id: 124 },
        { value: 'abcd', id: 125 },
      ],
      filter: 'ab',
    });

    expect(
      wrapper
        .find('[data-test="suggestion-123"]')
        .hasClass('molecules-type-ahead-search__suggestion--active'),
    ).toBe(false);
    expect(
      wrapper
        .find('[data-test="suggestion-124"]')
        .hasClass('molecules-type-ahead-search__suggestion--active'),
    ).toBe(true);
    expect(
      wrapper
        .find('[data-test="suggestion-125"]')
        .hasClass('molecules-type-ahead-search__suggestion--active'),
    ).toBe(false);
  });

  describe('onInputChange', () => {
    it('resets the state correctly if there is only 1 character in the input field', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(getState());

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 't' } });

      const expectedState = {
        filter: 't',
        suggestions: [],
        activeSuggestionIndex: -1,
      };
      expect(wrapper.state()).toEqual(expectedState);
    });
    it('updates the filter if there is more then 1 character', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(getState());
      sortFilteredData.mockReturnValue([{ value: 'testing', id: 0 }]);

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 'test' } });

      expect(wrapper.state().filter).toEqual('test');
    });
    it('filters the data', () => {
      const props = getProps({
        data: [{ value: 'foo bar', id: 2 }],
      });
      const wrapper = shallow(<TypeAheadSearch {...props} />);
      filterData.mockReturnValue([]);

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 'test' } });

      expect(filterData.mock.calls[0]).toEqual([
        [{ value: 'foo bar', id: 2 }],
        'test',
      ]);
    });
    it('sorts the filtered data', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(getState());
      filterData.mockReturnValue([{ value: 'testing', id: 0 }]);

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 'test' } });

      expect(sortFilteredData.mock.calls[0]).toEqual([
        [{ value: 'testing', id: 0 }],
        'test',
      ]);
    });
    it('sets the suggestions correctly if there are more then 5', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(getState());
      sortFilteredData.mockReturnValue([
        { value: 'testing', id: 0 },
        { value: 'tester', id: 1 },
        { value: 'tested', id: 2 },
        { value: 'test number 3', id: 3 },
        { value: 'tests', id: 4 },
        { value: 'test number 2', id: 5 },
      ]);

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 'test' } });

      expect(wrapper.state().suggestions).toEqual([
        { value: 'testing', id: 0 },
        { value: 'tester', id: 1 },
        { value: 'tested', id: 2 },
        { value: 'test number 3', id: 3 },
        { value: 'tests', id: 4 },
      ]);
    });
    it('sets the suggestions correctly if there are less then 5', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(getState());
      sortFilteredData.mockReturnValue([{ value: 'testing', id: 0 }]);

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 'test' } });

      expect(wrapper.state().suggestions).toEqual([
        { value: 'testing', id: 0 },
      ]);
    });
    it('does not set suggestions if the only filtered response is what has already been typed', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(getState({ filter: ' test  ' }));
      sortFilteredData.mockReturnValue([{ value: 'test', id: 0 }]);

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 'test' } });

      expect(wrapper.state().suggestions).toEqual([]);
    });
    it('sets the active index to the last item if it is too large', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(
        getState({
          activeSuggestionIndex: 3,
        }),
      );
      sortFilteredData.mockReturnValue([
        { value: 'testing', id: 0 },
        { value: 'tester', id: 1 },
        { value: 'tested', id: 2 },
      ]);

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 'test' } });

      expect(wrapper.state().activeSuggestionIndex).toEqual(2);
    });
    it('leaves the active index to the last item if it is too large', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(
        getState({
          activeSuggestionIndex: 1,
        }),
      );
      sortFilteredData.mockReturnValue([
        { value: 'testing', id: 0 },
        { value: 'tester', id: 1 },
        { value: 'tested', id: 2 },
      ]);

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 'test' } });

      expect(wrapper.state().activeSuggestionIndex).toEqual(1);
    });
    it('makes a debounced call to the passed onChange prop if using custom filters', () => {
      const onChangeSpy = jest.fn();
      const props = getProps({ onChange: onChangeSpy, useCustomFilter: true });
      const wrapper = shallow(<TypeAheadSearch {...props} />);

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('change', { target: { value: 'test' } });

      expect(onChangeSpy.mock.calls.length[1]);
    });
  });

  describe('onKeyDown', () => {
    describe('up arrow', () => {
      it('it decreases the activeState if it is greater then -1', () => {
        const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
        wrapper.setState(
          getState({
            activeSuggestionIndex: 3,
          }),
        );

        const input = wrapper.find('[data-test="search-input"]');
        input.simulate('keydown', { keyCode: 38 });

        expect(wrapper.state().activeSuggestionIndex).toBe(2);
      });
      it('it does nothing if the activeState is -1', () => {
        const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
        wrapper.setState(
          getState({
            activeSuggestionIndex: -1,
          }),
        );

        const input = wrapper.find('[data-test="search-input"]');
        input.simulate('keydown', { keyCode: 38 });

        expect(wrapper.state().activeSuggestionIndex).toBe(-1);
      });
    });

    describe('down arrow', () => {
      it('it increases the activeState if it is less then the total suggestions', () => {
        const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
        wrapper.setState(
          getState({
            suggestions: [{ value: 'a', id: 0 }, { value: 'b', id: 0 }],
            activeSuggestionIndex: 0,
          }),
        );

        const input = wrapper.find('[data-test="search-input"]');
        input.simulate('keydown', { keyCode: 40 });

        expect(wrapper.state().activeSuggestionIndex).toBe(1);
      });
      it('it does nothing if the activeState is on the last suggestion', () => {
        const props = getProps({
          suggestions: [{ value: 'a', id: 0 }, { value: 'b', id: 0 }],
          useCustomFilter: true,
        });
        const wrapper = shallow(<TypeAheadSearch {...props} />);
        wrapper.setState(
          getState({
            activeSuggestionIndex: 1,
          }),
        );

        const input = wrapper.find('[data-test="search-input"]');
        input.simulate('keydown', { keyCode: 40 });

        expect(wrapper.state().activeSuggestionIndex).toBe(1);
      });
    });

    describe('return', () => {
      it('if there is an active suggestion it filters the data with that suggestion', () => {
        const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
        wrapper.setState(
          getState({
            suggestions: [{ value: 'foobar', id: 0 }],
            activeSuggestionIndex: 0,
          }),
        );

        const input = wrapper.find('[data-test="search-input"]');
        input.simulate('keydown', { keyCode: 13 });

        expect(filterData.mock.calls[0][1]).toBe('foobar');
      });
      it('if there is not an active suggestion it filters the data with whatever the current filter is', () => {
        const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
        wrapper.setState(
          getState({
            filter: 'meow',
            activeSuggestionIndex: -1,
          }),
        );

        const input = wrapper.find('[data-test="search-input"]');
        input.simulate('keydown', { keyCode: 13 });

        expect(filterData.mock.calls[0][1]).toBe('meow');
      });
      it('calls props.onSubmit with the filtered data and selected filter', () => {
        const onSubmitSpy = jest.fn();
        const props = getProps({ onSubmit: onSubmitSpy });
        filterData.mockReturnValue([{ value: 'test', id: 42 }]);
        const wrapper = shallow(<TypeAheadSearch {...props} />);
        wrapper.setState({ filter: 'te' });

        const input = wrapper.find('[data-test="search-input"]');
        input.simulate('keydown', { keyCode: 13 });

        expect(onSubmitSpy.mock.calls[0]).toEqual([
          [{ value: 'test', id: 42 }],
          'te',
        ]);
      });
    });
    it('calls props.onSubmit with just the selected filter if using custom filters', () => {
      const onSubmitSpy = jest.fn();
      const props = getProps({ onSubmit: onSubmitSpy, useCustomFilter: true });
      const wrapper = shallow(<TypeAheadSearch {...props} />);
      wrapper.setState({ filter: 'te' });

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('keydown', { keyCode: 13 });

      expect(onSubmitSpy.mock.calls[0]).toEqual(['te']);
    });

    it('does not change anything for other keys', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(getState());

      const input = wrapper.find('[data-test="search-input"]');
      input.simulate('keydown', { keyCode: 12 });

      expect(wrapper.state()).toEqual(getState());
    });
  });

  describe('on magnifying glass click', () => {
    it('calls filters the data with whatever is currently typed', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(getState({ filter: 'bark' }));

      const magnifyingGlass = wrapper.find('[data-test="magnifying-glass"]');
      magnifyingGlass.simulate('click');

      expect(filterData.mock.calls[0][1]).toEqual('bark');
    });
    it('calls props.onSubmit with the filtered data and filter', () => {
      const onSubmitSpy = jest.fn();
      const props = getProps({ onSubmit: onSubmitSpy });
      filterData.mockReturnValue([{ value: 'test', id: 42 }]);
      const wrapper = shallow(<TypeAheadSearch {...props} />);
      wrapper.setState({ filter: 'te' });

      const magnifyingGlass = wrapper.find('[data-test="magnifying-glass"]');
      magnifyingGlass.simulate('click');

      expect(onSubmitSpy.mock.calls[0]).toEqual([
        [{ value: 'test', id: 42 }],
        'te',
      ]);
    });
    it('calls props.onSubmit with just the filter if using custom filters', () => {
      const onSubmitSpy = jest.fn();
      const props = getProps({ onSubmit: onSubmitSpy, useCustomFilter: true });
      const wrapper = shallow(<TypeAheadSearch {...props} />);
      wrapper.setState({ filter: 'te' });

      const magnifyingGlass = wrapper.find('[data-test="magnifying-glass"]');
      magnifyingGlass.simulate('click');

      expect(onSubmitSpy.mock.calls[0]).toEqual(['te']);
    });
  });

  describe('on suggestion click', () => {
    it('calls filters the data with the suggestion text', () => {
      const wrapper = shallow(<TypeAheadSearch {...getProps()} />);
      wrapper.setState(
        getState({ suggestions: [{ value: 'suggestion', id: 0 }] }),
      );

      const suggestion = wrapper.find('[data-test="suggestion-0"]');
      suggestion.simulate('click');

      expect(filterData.mock.calls[0][1]).toEqual('suggestion');
    });
    it('calls props.onSubmit with the filtered data', () => {
      const onSubmitSpy = jest.fn();
      const props = getProps({ onSubmit: onSubmitSpy });
      filterData.mockReturnValue([{ value: 'test', id: 42 }]);
      const wrapper = shallow(<TypeAheadSearch {...props} />);
      wrapper.setState(
        getState({ suggestions: [{ value: 'suggestion', id: 0 }] }),
      );

      const suggestion = wrapper.find('[data-test="suggestion-0"]');
      suggestion.simulate('click');

      expect(onSubmitSpy.mock.calls[0][0]).toEqual([{ value: 'test', id: 42 }]);
    });
    it('calls props.onSubmit with just the filter if using custom filters', () => {
      const onSubmitSpy = jest.fn();
      const props = getProps({
        onSubmit: onSubmitSpy,
        useCustomFilter: true,
        suggestions: [{ value: 'suggestion', id: 0 }],
      });
      const wrapper = shallow(<TypeAheadSearch {...props} />);
      wrapper.setState({ filter: 'sug' });

      const suggestion = wrapper.find('[data-test="suggestion-0"]');
      suggestion.simulate('click');

      expect(onSubmitSpy.mock.calls[0]).toEqual(['suggestion']);
    });
  });
});
