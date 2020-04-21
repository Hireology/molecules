import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import './dropdown.scss';

class Dropdown extends PureComponent {
  static propTypes = {
    placeholderText: PropTypes.string,
    // Array of actions displayed before options
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        onClick: PropTypes.func,
      }),
    ),
    // Array of options displayed after actions
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        onClick: PropTypes.func,
      }),
    ).isRequired,
  };

  static defaultProps = {
    placeholderText: 'Select an option',
    showDropdown: false,
    actions: [],
  };

  state = {
    activeSuggestionIndex: -1,
    selectedText: null,
  };

  /**
   * 38: up arrow - move to the previous suggestion
   * 40: down arrow - move to the next suggestion
   * 13: enter - 'click' the selected option
   *
   * @param {object} e - event on key down
   */
  handleKeyDown = (e, dropdownOptions) => {
    if (e.keyCode === 38) {
      this.setState({
        activeSuggestionIndex:
          this.state.activeSuggestionIndex !== -1
            ? this.state.activeSuggestionIndex - 1
            : -1,
      });
    } else if (e.keyCode === 40) {
      this.setState({
        activeSuggestionIndex:
          this.state.activeSuggestionIndex !== dropdownOptions.length - 1
            ? this.state.activeSuggestionIndex + 1
            : dropdownOptions.length - 1,
      });
    } else if (e.keyCode === 13) {
      if (this.state.activeSuggestionIndex > -1) {
        this.handleClick(dropdownOptions[this.state.activeSuggestionIndex]);
      } else {
        this.toggleDropdown();
      }
    }
  };

  /**
   * Call the items passed in callback.
   * If it was an option and not an action, also display
   * the selected text instead of the placeholder
   *
   *  @param {object} item - the item selected from the dropdown
   *  @param {object} e - event on click
   */
  handleClick = (item, e) => {
    if (e) e.preventDefault();
    this.setState({
      selectedText: item.isOption ? item.name : null,
      activeSuggestionIndex: -1,
      showDropdown: false,
    });
    item.onClick();
  };

  /**
   * Closes the dropdown when the user clicks anywhere
   * outside the component
   */
  handleClickOutside = () => {
    this.setState({ showDropdown: false });
  };

  /**
   * Toggle the dropdown
   * @param {object} e - event on click
   */
  toggleDropdown = (e) => {
    if (e) e.preventDefault();
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  render() {
    const actions = this.props.actions.map((action, id) => ({
      ...action,
      isOption: false,
      key: `action-${id}`,
    }));
    const options = this.props.options.map((option, id) => ({
      ...option,
      isOption: true,
      key: `option-${id}`,
    }));
    const dropdownItems = [...actions, ...options];
    return (
      <div className="molecules-dropdown">
        <div
          role="button"
          tabIndex={0}
          onClick={this.toggleDropdown}
          className="molecules-dropdown__selection"
          onKeyDown={(e) => this.handleKeyDown(e, dropdownItems)}
          data-test="dropdown-toggle"
        >
          {this.state.selectedText && (
            <span data-test="selected-text">{this.state.selectedText}</span>
          )}
          {!this.state.selectedText && (
            <span
              className="molecules-dropdown__placeholder"
              data-test="placeholder"
            >
              {this.props.placeholderText}
            </span>
          )}
          <i
            className={classNames('fa fa-fw', {
              'fa-chevron-down': !this.state.showDropdown,
              'fa-chevron-up': this.state.showDropdown,
            })}
          />
        </div>
        {this.state.showDropdown && (
          <div className="molecules-dropdown__items" data-test="dropdown">
            {dropdownItems.map((item, index) => (
              <p
                key={item.key}
                role="presentation"
                onClick={(e) => this.handleClick(item, e)}
                className={classNames('molecules-dropdown__item', {
                  'molecules-dropdown__item--active':
                    this.state.activeSuggestionIndex === index,
                  'molecules-dropdown__item--action': !item.isOption,
                })}
                data-test="dropdown-item"
                data-value={item.name}
              >
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

// Exported for testing
export { Dropdown as UnwrappedDropdown };

export default onClickOutside(Dropdown);
