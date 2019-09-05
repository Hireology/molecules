/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import startsWith from 'lodash.startswith';
import classNames from 'classnames';
import { filterData, sortFilteredData } from './util';
import './typeAheadSearch.scss';

class TypeAheadSearch extends React.Component {
  state = {
    filter: this.props.initialFilter,
    suggestions: [],
    activeSuggestionIndex: -1,
  };

  onInputChange = (e) => {
    const filter = e.target.value;
    if (filter.trim().length > 1) {
      return this.updateSuggestions(filter);
    } else {
      this.setState({
        filter,
        suggestions: [],
        activeSuggestionIndex: -1,
      });
    }
  };

  onSubmit = (filter) => {
    this.setState({
      filter,
      suggestions: [],
      activeSuggestionIndex: -1,
    });
    const filteredOptions = filterData(this.props.data, filter);

    this.props.onSubmit(filteredOptions, filter);
  };

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
  };

  updateSuggestions = (filter) => {
    const filteredOptions = filterData(this.props.data, filter);
    const sortedOptions = sortFilteredData(filteredOptions, filter);

    const suggestions = sortedOptions.slice(0, 5);

    const suggestionIsFilter =
      sortedOptions.length === 1 && sortedOptions[0].value === filter.trim();
    const activeIsTooLarge =
      this.state.activeSuggestionIndex > suggestions.length - 1;
    this.setState({
      filter,
      suggestions: suggestionIsFilter ? [] : [...suggestions],
      activeSuggestionIndex: activeIsTooLarge
        ? suggestions.length - 1
        : this.state.activeSuggestionIndex,
    });
  };

  handleKeyDown = (e) => {
    /*
      38: up arrow - move to the previous suggestion
      40: down arrow - move to the next suggestion
      13: enter - submit
    */
    if (this.state.suggestions.length !== 0 && e.keyCode === 38) {
      this.setState({
        activeSuggestionIndex:
          this.state.activeSuggestionIndex !== -1
            ? this.state.activeSuggestionIndex - 1
            : -1,
      });
    } else if (this.state.suggestions.length !== 0 && e.keyCode === 40) {
      this.setState({
        activeSuggestionIndex:
          this.state.activeSuggestionIndex !== this.state.suggestions.length - 1
            ? this.state.activeSuggestionIndex + 1
            : this.state.suggestions.length - 1,
      });
    } else if (e.keyCode === 13) {
      const filter =
        this.state.activeSuggestionIndex > -1
          ? this.state.suggestions[[this.state.activeSuggestionIndex]].value
          : this.state.filter;
      this.onSubmit(filter);
    }
  };

  render() {
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
        {this.state.suggestions.length > 0 && (
          <div
            className="molecules-type-ahead-search__type-ahead"
            data-test="type-ahead-dropdown"
          >
            {this.state.suggestions.map((suggestion, index) => (
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

TypeAheadSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  initialFilter: PropTypes.string,
  placeholder: PropTypes.string,
};

TypeAheadSearch.defaultProps = {
  initialFilter: '',
  placeholder: '',
};

export default TypeAheadSearch;
