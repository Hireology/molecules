import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

jest.disableAutomock();

const getProps = (overrides) => ({
  checked: false,
  disabled: false,
  error: false,
  id: 'id',
  inline: false,
  label: 'label',
  name: 'name',
  onChange: () => null,
  value: 'value',
  ...overrides,
});

describe('RadioButton', () => {
  it('adds the appropriate inline classname if props.inline is true', () => {
    const props = getProps({ inline: true });
    const wrapper = shallow(<RadioButton {...props} />);
    expect(
      wrapper
        .find('[data-test="wrapper"]')
        .hasClass('molecules-radio-button--inline'),
    ).toBe(true);
  });
  it('adds the appropriate inline classname if props.error is true', () => {
    const props = getProps({ error: true });
    const wrapper = shallow(<RadioButton {...props} />);
    expect(
      wrapper
        .find('[data-test="wrapper"]')
        .hasClass('molecules-radio-button--error'),
    ).toBe(true);
  });
  it('is checked if props.checked is true', () => {
    const props = getProps({ checked: true });
    const wrapper = shallow(<RadioButton {...props} />);
    expect(wrapper.find('[data-test="radio-button"]').props().checked).toBe(
      true,
    );
  });
  it('is unchecked if props.checked is false', () => {
    const props = getProps({ checked: false });
    const wrapper = shallow(<RadioButton {...props} />);
    expect(wrapper.find('[data-test="radio-button"]').props().checked).toBe(
      false,
    );
  });
  it('is displays the passed in label text', () => {
    const wrapper = shallow(<RadioButton {...getProps()} />);
    expect(wrapper.find('[data-test="label"]').text()).toBe('label');
  });
  it('calls props.onChange when radio button is changed', () => {
    const onChangeSpy = jest.fn();
    const props = getProps({ onChange: onChangeSpy });
    const wrapper = shallow(<RadioButton {...props} />);
    wrapper.find('[data-test="radio-button"]').simulate('change');
    expect(onChangeSpy.mock.calls.length).toBe(1);
  });
});
