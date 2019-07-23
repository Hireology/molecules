import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

jest.disableAutomock();

const getProps = (overrides) => ({
  additionalClasses: '',
  ...overrides,
});

describe('Link', () => {
  it('adds the appropriate type classnames', () => {
    const props = getProps({ type: 'danger' });
    const wrapper = shallow(
      <Link {...props}>
        <div />
      </Link>,
    );
    expect(
      wrapper.find('[data-test="link"]').hasClass('molecules-link--danger'),
    ).toBe(true);
  });
  it('passes through any extra classnames', () => {
    const props = getProps({ additionalClasses: 'test' });
    const wrapper = shallow(
      <Link {...props}>
        <div />
      </Link>,
    );
    expect(wrapper.find('[data-test="link"]').hasClass('test')).toBe(true);
  });
  it('displays any children', () => {
    const wrapper = shallow(
      <Link {...getProps()}>
        <div data-test="test" />
      </Link>,
    );
    expect(wrapper.find('[data-test="test"]').length).toBe(1);
  });
  it('passes through an onClick handler', () => {
    const onClickSpy = jest.fn();
    const props = getProps({ onClick: onClickSpy });
    const wrapper = shallow(
      <Link {...props}>
        <div />
      </Link>,
    );
    wrapper.find('[data-test="link"]').simulate('click');
    expect(onClickSpy.mock.calls.length).toBe(1);
  });
});
