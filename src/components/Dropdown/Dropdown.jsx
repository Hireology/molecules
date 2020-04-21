import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import './dropdown.scss';

class Dropdown extends PureComponent {
  static propTypes = {
    placeholderText: PropTypes.string,
    // Option to be selected  by default
    selectedOptionId: PropTypes.number,
    // Array of options displayed after actions
    options: PropTypes.arrayOf(
      PropTypes.shape({
        display: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        onClick: PropTypes.func,
        id: PropTypes.number,
      }),
    ).isRequired,
  };

  static defaultProps = {
    placeholderText: 'Select an option',
    selectedOptionId: null,
    showDropdown: false,
  };

  state = {
    activeSuggestionIndex: -1,
  };

  /**
   * 38: up arrow - move to the previous option
   * 40: down arrow - move to the next option
   * 13: enter - 'click' the selected option
   *
   * @param {object} e - event on key down
   */
  handleKeyDown = (e) => {
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
          this.state.activeSuggestionIndex !== this.props.options.length - 1
            ? this.state.activeSuggestionIndex + 1
            : this.props.options.length - 1,
      });
    } else if (e.keyCode === 13) {
      if (this.state.activeSuggestionIndex > -1) {
        this.handleClick(this.props.options[this.state.activeSuggestionIndex]);
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
    return (
      <div className="molecules-dropdown">
        <div
          role="button"
          tabIndex={0}
          onClick={this.toggleDropdown}
          className="molecules-dropdown__selection"
          onKeyDown={(e) => this.handleKeyDown(e)}
          data-test="dropdown-toggle"
        >
          {this.props.selectedOptionId && (
            <span data-test="selected-text">
              {
                this.props.options.find(
                  (option) => option.id === this.props.selectedOptionId,
                ).display
              }
            </span>
          )}
          {!this.props.selectedOptionId && (
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
            {this.props.options.map((item, index) => (
              <p
                key={item.id}
                role="presentation"
                onClick={(e) => this.handleClick(item, e)}
                className={classNames('molecules-dropdown__item', {
                  'molecules-dropdown__item--active':
                    this.state.activeSuggestionIndex === index,
                })}
                data-test="dropdown-item"
                data-value={item.display}
              >
                {item.display}
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
