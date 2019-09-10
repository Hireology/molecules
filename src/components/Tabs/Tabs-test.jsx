import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './Tabs';

jest.disableAutomock();

const getProps = (overrides) => ({
  activeIndex: 0,
  onClick: () => null,
  tabs: [],
  type: 'primary',
  ...overrides,
});

describe('Tabs', () => {
  it('renders a tab for each item in props.tabs', () => {
    const props = getProps({ tabs: ['one', 'two', 'three'] });
    const wrapper = shallow(<Tabs {...props} />);
    expect(wrapper.find('[data-unit-test="tab"]').length).toBe(3);
  });
  it('includes the primary class if the type is primary', () => {
    const props = getProps({ tabs: ['one'] });
    const wrapper = shallow(<Tabs {...props} />);
    expect(
      wrapper.find('[data-unit-test="tab"]').hasClass('molecules-tab--primary'),
    ).toBe(true);
  });
  it('does not include the secondary class if the type is primary', () => {
    const props = getProps({ tabs: ['one'] });
    const wrapper = shallow(<Tabs {...props} />);
    expect(
      wrapper
        .find('[data-unit-test="tab"]')
        .hasClass('molecules-tab--secondary'),
    ).toBe(false);
  });
  it('includes the secondary class if the type is secondary', () => {
    const props = getProps({ tabs: ['one'], type: 'secondary' });
    const wrapper = shallow(<Tabs {...props} />);
    expect(
      wrapper
        .find('[data-unit-test="tab"]')
        .hasClass('molecules-tab--secondary'),
    ).toBe(true);
  });
  it('does not include the primary class if the type is secondary', () => {
    const props = getProps({ tabs: ['one'], type: 'secondary' });
    const wrapper = shallow(<Tabs {...props} />);
    expect(
      wrapper.find('[data-unit-test="tab"]').hasClass('molecules-tab--primary'),
    ).toBe(false);
  });
  it('includes the active class if on the active index', () => {
    const props = getProps({ tabs: ['foo', 'bar'], activeIndex: 1 });
    const wrapper = shallow(<Tabs {...props} />);
    expect(
      wrapper
        .find('[data-unit-test="tab"]')
        .at(1)
        .hasClass('molecules-tab--active'),
    ).toBe(true);
  });
  it('does not include the active class if not on the active index', () => {
    const props = getProps({ tabs: ['foo', 'bar'], activeIndex: 1 });
    const wrapper = shallow(<Tabs {...props} />);
    expect(
      wrapper
        .find('[data-unit-test="tab"]')
        .at(0)
        .hasClass('molecules-tab--active'),
    ).toBe(false);
  });
  it('calls props.onClick with the selected index on tab click', () => {
    const onClickSpy = jest.fn();
    const props = getProps({ onClick: onClickSpy, tabs: ['a', 'b', 'c'] });
    const wrapper = shallow(<Tabs {...props} />);
    wrapper
      .find('[data-unit-test="tab"]')
      .at(1)
      .simulate('click');
    expect(onClickSpy.mock.calls[0][0]).toBe(1);
  });
});
