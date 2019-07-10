import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from './ButtonGroup';

const getProps = (overrides) => ({
  extraClassNames: '',
  ...overrides,
});

describe('ButtonGroup', () => {
  it('adds the appropriate align classnames', () => {
    const props = getProps({ align: 'left' });
    const wrapper = shallow(
      <ButtonGroup {...props}>
        <div />
      </ButtonGroup>,
    );
    expect(
      wrapper
        .find('[data-test="button-group"]')
        .hasClass('hireology-button-group--left'),
    ).toBe(true);
  });
  it('adds the appropriate size classnames', () => {
    const props = getProps({ size: 'full' });
    const wrapper = shallow(
      <ButtonGroup {...props}>
        <div />
      </ButtonGroup>,
    );
    expect(
      wrapper
        .find('[data-test="button-group"]')
        .hasClass('hireology-button-group--full'),
    ).toBe(true);
  });
  it('passes through any extra classnames', () => {
    const props = getProps({ extraClassNames: 'test' });
    const wrapper = shallow(
      <ButtonGroup {...props}>
        <div />
      </ButtonGroup>,
    );
    expect(wrapper.find('[data-test="button-group"]').hasClass('test')).toBe(
      true,
    );
  });
  it('displays any children', () => {
    const props = getProps({ extraClassNames: 'test' });
    const wrapper = shallow(
      <ButtonGroup {...props}>
        <span data-test="test" />
      </ButtonGroup>,
    );
    expect(wrapper.find('[data-test="test"]').length).toBe(1);
  });
});
