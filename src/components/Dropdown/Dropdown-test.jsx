import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedDropdown as Dropdown } from './Dropdown';

const getProps = (overrides) => ({
  placeholderText: '',
  selectedOptionId: null,
  options: [],
  ...overrides,
});

describe('Dropdown', () => {
  it('should render the placeholder text initially', () => {
    const wrapper = shallow(
      <Dropdown {...getProps({ placeholderText: 'test' })} />,
    );
    expect(wrapper.find('[data-test="placeholder"]').text()).toEqual('test');
    expect(wrapper.find('[data-test="selected-text"]').length).toBe(0);
  });
  it('should not render the dropdown initially', () => {
    const wrapper = shallow(<Dropdown {...getProps()} />);
    expect(wrapper.find('[data-test="dropdown"]').length).toBe(0);
  });
  it('should toggle the dropdown when a user clicks the dropdown toggle', () => {
    const wrapper = shallow(<Dropdown {...getProps()} />);
    wrapper.find('[data-test="dropdown-toggle"]').simulate('click');
    expect(wrapper.find('[data-test="dropdown"]').length).toBe(1);
    wrapper.find('[data-test="dropdown-toggle"]').simulate('click');
    expect(wrapper.find('[data-test="dropdown"]').length).toBe(0);
  });
  it('should close the dropdown if a user hits enter after going down and then up', () => {
    const actions = [{ display: 'action', onClick: () => null }];
    const wrapper = shallow(<Dropdown {...getProps({ actions })} />);

    // open the dropdown
    wrapper
      .find('[data-test="dropdown-toggle"]')
      .simulate('keydown', { keyCode: 13 });

    expect(wrapper.find('[data-test="dropdown"]').length).toBe(1);

    // highlight the first item
    wrapper
      .find('[data-test="dropdown-toggle"]')
      .simulate('keydown', { keyCode: 40 });
    // un-highlight the first item
    wrapper
      .find('[data-test="dropdown-toggle"]')
      .simulate('keydown', { keyCode: 38 });
    // close the dropdown
    wrapper
      .find('[data-test="dropdown-toggle"]')
      .simulate('keydown', { keyCode: 13 });

    expect(wrapper.find('[data-test="dropdown"]').length).toBe(0);
  });
  it('should render a dropdown item for option passed', () => {
    const options = [
      { display: 'option1', onClick: () => null, id: 1 },
      { display: 'option2', onClick: () => null, id: 2 },
      { display: 'option3', onClick: () => null, id: 3 },
    ];

    const wrapper = shallow(<Dropdown {...getProps({ options })} />);
    wrapper.find('[data-test="dropdown-toggle"]').simulate('click');
    expect(wrapper.find('[data-test="dropdown-item"]').length).toEqual(3);
  });
  it('should call the callback after an option is clicked', () => {
    const onClickSpy = jest.fn();
    const options = [{ display: 'option1', onClick: onClickSpy, id: 1 }];
    const wrapper = shallow(<Dropdown {...getProps({ options })} />);
    wrapper.find('[data-test="dropdown-toggle"]').simulate('click');
    wrapper.find('[data-value="option1"]').simulate('click');
    expect(onClickSpy.mock.calls.length).toBe(1);
  });
  it('should call the callback after an option is navigated to and selected by keyboard', () => {
    const onClickSpy = jest.fn();
    const options = [{ display: 'option1', onClick: onClickSpy, id: 1 }];
    const wrapper = shallow(<Dropdown {...getProps({ options })} />);
    // open the dropdown
    wrapper
      .find('[data-test="dropdown-toggle"]')
      .simulate('keydown', { keyCode: 13 });
    // highlight the first item
    wrapper
      .find('[data-test="dropdown-toggle"]')
      .simulate('keydown', { keyCode: 40 });
    // select the first item
    wrapper
      .find('[data-test="dropdown-toggle"]')
      .simulate('keydown', { keyCode: 13 });
    expect(onClickSpy.mock.calls.length).toBe(1);
  });
  it('should display the selected item instead of the placeholder text if an item is selected', () => {
    const options = [
      { display: 'option1', onClick: () => null, id: 1 },
      { display: 'option2', onClick: () => null, id: 2 },
    ];

    const wrapper = shallow(
      <Dropdown {...getProps({ options, selectedOptionId: 2 })} />,
    );
    expect(wrapper.find('[data-test="placeholder"]').length).toBe(0);
    expect(wrapper.find('[data-test="selected-text"]').text()).toEqual(
      'option2',
    );
  });
});
