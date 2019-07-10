import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../Checkbox';

const getProps = (overrides) => ({
  id: 'id',
  label: 'label',
  checked: false,
  onChange: () => null,
  ...overrides,
});

describe('checkbox', () => {
  it('should be checked if props.checked is true', () => {
    const props = getProps({ checked: true });
    const wrapper = shallow(<Checkbox {...props} />);
    expect(wrapper.find('[data-test="checkbox"]').props().checked).toBe(true);
  });
  it('should not be checked if props.checked is false', () => {
    const props = getProps({ checked: false });
    const wrapper = shallow(<Checkbox {...props} />);
    expect(wrapper.find('[data-test="checkbox"]').props().checked).toBe(false);
  });
  it('should call props.onChange when the checkbox is changed', () => {
    const onChangeSpy = jest.fn();
    const props = getProps({ onChange: onChangeSpy });
    const wrapper = shallow(<Checkbox {...props} />);
    wrapper.find('[data-test="checkbox"]').simulate('change');
    expect(onChangeSpy.mock.calls.length).toBe(1);
  });
  it('displays the label text', () => {
    const wrapper = shallow(<Checkbox {...getProps()} />);
    expect(wrapper.find('[data-test="label"]').text()).toBe('label');
  });
});
