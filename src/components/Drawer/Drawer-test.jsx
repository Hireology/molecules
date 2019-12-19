import React from 'react';
import { shallow } from 'enzyme';
import Drawer from './Drawer';

const getProps = (overrides) => ({
  title: '',
  isOpen: true,
  onExitClick: () => null,
  hideForDesktop: true,
  ...overrides,
});

describe('Drawer', () => {
  it('renders if isOpen is true', () => {
    const wrapper = shallow(
      <Drawer {...getProps()}>
        <div />
      </Drawer>,
    );
    expect(wrapper.find('[data-test="drawer"]').length).toBe(1);
  });
  it('does not render if isOpen is false', () => {
    const wrapper = shallow(
      <Drawer {...getProps({ isOpen: false })}>
        <div />
      </Drawer>,
    );
    expect(wrapper.find('[data-test="drawer"]').length).toBe(0);
  });
  it('renders an exit icon', () => {
    const wrapper = shallow(
      <Drawer {...getProps()}>
        <div />
      </Drawer>,
    );
    expect(wrapper.find('[data-test="exit-icon"]').length).toBe(1);
  });
  it('calls onExitClick when exit icon is clicked', () => {
    const onExitClick = jest.fn();
    const wrapper = shallow(
      <Drawer {...getProps({ onExitClick })}>
        <div />
      </Drawer>,
    );
    wrapper.find('[data-test="exit-icon"]').simulate('click');
    expect(onExitClick.mock.calls.length).toBe(1);
  });
  it('renders the title', () => {
    const wrapper = shallow(
      <Drawer {...getProps({ title: 'Test Title' })}>
        <div />
      </Drawer>,
    );
    expect(wrapper.find('[data-test="title"]').text()).toBe('Test Title');
  });
  it('renders any passed children', () => {
    const wrapper = shallow(
      <Drawer {...getProps({ title: 'Test Title' })}>
        <div data-test="children" />
      </Drawer>,
    );
    expect(wrapper.find('[data-test="children"]').length).toBe(1);
  });
  it('adds the drawer--hideForDesktop class if hideForDesktop is true', () => {
    const wrapper = shallow(
      <Drawer {...getProps()}>
        <div />
      </Drawer>,
    );
    expect(
      wrapper.find('[data-test="drawer"]').hasClass('drawer--hideForDesktop'),
    ).toBe(true);
  });
  it('does not add the drawer--hideForDesktop class if hideForDesktop is false', () => {
    const wrapper = shallow(
      <Drawer {...getProps({ hideForDesktop: false })}>
        <div />
      </Drawer>,
    );
    expect(
      wrapper.find('[data-test="drawer"]').hasClass('drawer--hideForDesktop'),
    ).toBe(false);
  });
  it('adds the drawer__overlay--hideForDesktop class if hideForDesktop is true', () => {
    const wrapper = shallow(
      <Drawer {...getProps()}>
        <div />
      </Drawer>,
    );
    expect(
      wrapper
        .find('[data-test="drawer-overlay"]')
        .hasClass('drawer__overlay--hideForDesktop'),
    ).toBe(true);
  });
  it('does not add the drawer__overlay--hideForDesktop class if hideForDesktop is false', () => {
    const wrapper = shallow(
      <Drawer {...getProps({ hideForDesktop: false })}>
        <div />
      </Drawer>,
    );
    expect(
      wrapper
        .find('[data-test="drawer-overlay"]')
        .hasClass('drawer__overlay--hideForDesktop'),
    ).toBe(false);
  });
});
