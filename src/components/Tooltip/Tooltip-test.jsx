import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

jest.disableAutomock();

const getProps = (overrides) => ({
  position: 'right',
  hide: false,
  hover: true,
  textAlign: 'left',
  tooltipContent: 'tooltip text',
  width: 'medium',
  ...overrides,
});

describe('Tooltip', () => {
  it('renders a the tooltip icon if no children are passed', () => {
    const wrapper = shallow(<Tooltip {...getProps()} />);
    expect(wrapper.find('[data-test="tooltip-icon"]').length).toBe(1);
  });
  it('renders does not render the tooltip icon if children are passed', () => {
    const wrapper = shallow(
      <Tooltip {...getProps()}>
        <div />
      </Tooltip>,
    );
    expect(wrapper.find('[data-test="tooltip-icon"]').length).toBe(0);
  });
  it('renders the children if they are passed', () => {
    const wrapper = shallow(
      <Tooltip {...getProps()}>
        <div data-test="test" />
      </Tooltip>,
    );
    expect(wrapper.find('[data-test="test"]').length).toBe(1);
  });
  it('does not render the tooltip if hide is true', () => {
    const wrapper = shallow(<Tooltip {...getProps({ hide: true })} />);
    expect(wrapper.find('[data-test="tooltip"]').length).toBe(0);
  });
  it('does not render the tooltipContent if hide is true', () => {
    const props = getProps({
      hide: true,
      tooltipContent: <div data-test="test" />,
    });
    const wrapper = shallow(<Tooltip {...props} />);
    expect(wrapper.find('[data-test="test"]').length).toBe(0);
  });
  it('renders the tooltip if hide is false', () => {
    const wrapper = shallow(<Tooltip {...getProps()} />);
    expect(wrapper.find('[data-test="tooltip"]').length).toBe(1);
  });
  it('renders the tooltipContent if hide is false', () => {
    const props = getProps({
      hide: false,
      tooltipContent: <div data-test="test" />,
    });
    const wrapper = shallow(<Tooltip {...props} />);
    expect(wrapper.find('[data-test="test"]').length).toBe(1);
  });
  it('adds the correct class for position prop', () => {
    const props = getProps({ position: 'bottom' });
    const wrapper = shallow(<Tooltip {...props} />);
    expect(
      wrapper
        .find('[data-test="tooltip"]')
        .hasClass('molecules-tooltip--bottom'),
    ).toBe(true);
  });
  it('adds the correct class for textAlign prop', () => {
    const props = getProps({ textAlign: 'center' });
    const wrapper = shallow(<Tooltip {...props} />);
    expect(
      wrapper
        .find('[data-test="tooltip"]')
        .hasClass('molecules-tooltip--align-center'),
    ).toBe(true);
  });
  it('adds the hover class if hover is true', () => {
    const wrapper = shallow(<Tooltip {...getProps()} />);
    expect(
      wrapper
        .find('[data-test="tooltip"]')
        .hasClass('molecules-tooltip--hover'),
    ).toBe(true);
  });
  it('does not add the hover class if hover is false', () => {
    const wrapper = shallow(<Tooltip {...getProps({ hover: false })} />);
    expect(
      wrapper
        .find('[data-test="tooltip"]')
        .hasClass('molecules-tooltip--hover'),
    ).toBe(false);
  });
  it('adds a width class if a predetermined width is passed', () => {
    const wrapper = shallow(<Tooltip {...getProps({ width: 'large' })} />);
    expect(
      wrapper
        .find('[data-test="tooltip"]')
        .hasClass('molecules-tooltip--large'),
    ).toBe(true);
  });
  it('adds the width style if a custom width is passed', () => {
    const wrapper = shallow(<Tooltip {...getProps({ width: '123px' })} />);
    expect(wrapper.find('[data-test="tooltip"]').props().style.width).toBe(
      '123px',
    );
  });
});
