/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import startsWith from 'lodash.startswith';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import * as util from './util';
import './typeAheadSearch.scss';

class TypeAheadSearch extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialFilter: PropTypes.string,
    placeholder: PropTypes.string,
    useCustomFilter: PropTypes.bool,
    // Array of objects required if useCustomFilter is false
    data: util.customDataValidator,
    // Function required if useCustomFilter is true
    onChange: util.customOnChangeValidator,
    // Array of objects required if useCustomFilter is true
    suggestions: util.customSuggestionsValidator,
  };
  static defaultProps = {
    useCustomFilter: false,
    data: null,
    suggestions: null,
    initialFilter: '',
    placeholder: '',
    onChange: () => null,
  };

  state = {
    filter: this.props.initialFilter,
    suggestions: [],
    activeSuggestionIndex: -1,
    shouldCallOnChange: true,
  };

  /**
   * Input change handler
   * @param {object} e - event on input change
   * If we are handling filtering, update the suggestions
   * If we are not handling filtering, callback to parent component
   */
  onInputChange = (e) => {
    const filter = e.target.value;
    this.setState({ filter });
    if (!this.props.useCustomFilter) {
      if (filter.trim().length > 1) {
        return this.updateSuggestions(filter);
      } else {
        this.setState({
          suggestions: [],
          activeSuggestionIndex: -1,
        });
      }
    } else if (filter.trim().length > 1) {
      this.delayedOnChange(filter);
    }
  };

  /**
   * On submit handler
   * @param {string} filter - The string to filter data with
   * If we are handling filtering, callback with the filtered data and filter string,
   * If we are not handling filtering, callback with the filter string
   */
  onSubmit = (filter) => {
    this.setState({ filter, activeSuggestionIndex: -1 });
    if (!this.props.useCustomFilter) {
      this.setState({
        suggestions: [],
      });
      const filteredOptions = util.filterData(this.props.data, filter);

      this.props.onSubmit(filteredOptions, filter);
    } else {
      this.setState({ shouldCallOnChange: false });
      this.props.onSubmit(filter);
    }
  };

  /**
   * On change handler
   * @param {string} filter - The string to filter data with
   * Only call onChange if submit has not been recently clicked
   * to avoid a dropdown being shown after the user has already
   * submitted the data
   */
  onChangeHandler = (filter) => {
    if (this.state.shouldCallOnChange) {
      this.props.onChange(filter);
    } else {
      this.setState({ shouldCallOnChange: true });
    }
  };

  /**
   * Finds and emphasizes text in suggestion that matches filter
   * @param {string[]} suggestion - The suggestion text broken into array by word
   * @returns {jsx} - The jsx element to be displayed as suggestion text
   * If no match is found, just return the string. This should only be true if the parent
   * component is passing suggestions and hasn't caught up to the input yet
   */
  getSuggestionText = (suggestion) => {
    let suggestionSection = null;
    for (let wordIteration = 0; suggestionSection !== ''; wordIteration += 1) {
      suggestionSection = suggestion
        .split(' ')
        .slice(wordIteration)
        .join(' ');
      if (
        startsWith(
          suggestionSection.toLowerCase(),
          this.state.filter.trim().toLowerCase(),
        )
      ) {
        const preBoldText = suggestion
          .split(' ')
          .slice(0, wordIteration)
          .join(' ');
        const boldText = suggestion
          .split(' ')
          .slice(wordIteration)
          .join(' ')
          .slice(0, this.state.filter.length);
        const postBoldText = suggestion
          .split(' ')
          .slice(wordIteration)
          .join(' ')
          .slice(this.state.filter.length);
        return (
          <span data-test="suggestion-text">
            {preBoldText !== '' && `${preBoldText} `}
            <b>{boldText}</b>
            {postBoldText !== '' && postBoldText}
          </span>
        );
      }
    }
    return <span data-test="suggestion-text">{suggestion}</span>;
  };

  delayedOnChange = debounce(this.onChangeHandler, 1000);

  /**
   * Updates the list of suggestions to match new filter
   * @param {string} filter - filter to be used to find suggestions
   */
  updateSuggestions = (filter) => {
    const filteredOptions = util.filterData(this.props.data, filter);
    const sortedOptions = util.sortFilteredData(filteredOptions, filter);

    const suggestions = sortedOptions.slice(0, 5);

    const suggestionIsFilter =
      sortedOptions.length === 1 && sortedOptions[0].value === filter.trim();
    const activeIsTooLarge =
      this.state.activeSuggestionIndex > suggestions.length - 1;
    this.setState({
      suggestions: suggestionIsFilter ? [] : [...suggestions],
      activeSuggestionIndex: activeIsTooLarge
        ? suggestions.length - 1
        : this.state.activeSuggestionIndex,
    });
  };

  /**
   * 38: up arrow - move to the previous suggestion
   * 40: down arrow - move to the next suggestion
   * 13: enter - submit
   * @param {object} e - event on key down
   */
  handleKeyDown = (e) => {
    const suggestions = this.props.useCustomFilter
      ? this.props.suggestions
      : this.state.suggestions;
    if (suggestions.length !== 0 && e.keyCode === 38) {
      this.setState({
        activeSuggestionIndex:
          this.state.activeSuggestionIndex !== -1
            ? this.state.activeSuggestionIndex - 1
            : -1,
      });
    } else if (suggestions.length !== 0 && e.keyCode === 40) {
      this.setState({
        activeSuggestionIndex:
          this.state.activeSuggestionIndex !== suggestions.length - 1
            ? this.state.activeSuggestionIndex + 1
            : suggestions.length - 1,
      });
    } else if (e.keyCode === 13) {
      const filter =
        this.state.activeSuggestionIndex > -1
          ? suggestions[[this.state.activeSuggestionIndex]].value
          : this.state.filter;
      this.onSubmit(filter);
    }
  };

  render() {
    const suggestions = this.props.useCustomFilter
      ? this.props.suggestions
      : this.state.suggestions;
    return (
      <div className="molecules-type-ahead-search">
        <i
          role="button"
          tabIndex={0}
          onClick={() => this.onSubmit(this.state.filter)}
          className="fa fa-search fa-fw molecules-type-ahead-search__magnifying-glass"
          data-test="magnifying-glass"
          aria-label="search"
        />
        <input
          type="text"
          className="molecules-type-ahead-search__search"
          data-test="search-input"
          placeholder={this.props.placeholder}
          value={this.state.filter}
          onChange={this.onInputChange}
          onKeyDown={this.handleKeyDown}
          aria-label="filter"
          aria-describedby={this.props.placeholder}
        />
        {suggestions.length > 0 && this.state.filter.length > 1 && (
          <div
            className="molecules-type-ahead-search__type-ahead"
            data-test="type-ahead-dropdown"
          >
            {suggestions.map((suggestion, index) => (
              <p
                key={`${suggestion.value}-${suggestion.id}`}
                role="presentation"
                onClick={() => this.onSubmit(suggestion.value)}
                data-test={`suggestion-${suggestion.id}`}
                className={classNames(
                  'molecules-type-ahead-search__suggestion',
                  {
                    'molecules-type-ahead-search__suggestion--active':
                      this.state.activeSuggestionIndex === index,
                  },
                )}
                id={index}
              >
                {this.getSuggestionText(suggestion.value)}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TypeAheadSearch;
