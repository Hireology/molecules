import React from 'react';
import { shallow } from 'enzyme';
import CollapsableBox from '../CollapsableBox';

// TO DO: Update to include new props
const getProps = (overrides) => ({
  nonScrollableContent: null,
  defaultExpanded: true,
  title: 'Title',
  scrollable: false,
  ...overrides,
});

describe('CollapsableBox', () => {
  it('should render a header', () => {
    const wrapper = shallow(
      <CollapsableBox {...getProps()}>
        <div />
      </CollapsableBox>,
    );
    expect(wrapper.find('[data-test="collapsable-box-header"]').length).toBe(1);
  });
  // TO DO for the following 2 tests:
  // Use the overrides prop in the getProps function to create
  // the component props you need for this test pass
  it('should render an plus icon if the box is collapsed', () => {
    const props = getProps(/* add overrides here */);
    const wrapper = shallow(
      <CollapsableBox {...props}>
        <div />
      </CollapsableBox>,
    );
    expect(
      wrapper.find('[data-test="collapsable-box-icon"]').props().className,
    ).toContain('fa-plus-square');
  });
  it('should not render the body if the box is collapsed', () => {
    const props = getProps(/* add overrides here */);
    const wrapper = shallow(
      <CollapsableBox {...props}>
        <div />
      </CollapsableBox>,
    );
    expect(wrapper.find('[data-test="collapsable-box-body"]').length).toBe(0);
  });
  it('should render a minus icon if the box is expanded', () => {
    const props = getProps();
    const wrapper = shallow(
      <CollapsableBox {...props}>
        <div />
      </CollapsableBox>,
    );
    expect(
      wrapper.find('[data-test="collapsable-box-icon"]').props().className,
    ).toContain('fa-minus-square');
  });
  it('should render the body if the box is expanded', () => {
    const props = getProps();
    const wrapper = shallow(
      <CollapsableBox {...props}>
        <div />
      </CollapsableBox>,
    );
    expect(wrapper.find('[data-test="collapsable-box-body"]').length).toBe(1);
  });
  // TO DO for the following 3 tests:
  // make the handleToggle prop a spy (aka: jest.fn(); ), then validate it has been called
  // after each simulated event
  it('should call handleToggle on icon button click', () => {
    // wrapper.find('[data-test="collapsable-box-icon-button"]').simulate('click');
  });
  it('should call handleToggle on icon button focus and return', () => {
    /* wrapper
      .find('[data-test="collapsable-box-icon-button"]')
      .simulate('keydown', { keyCode: 13 });
    */
  });
  it('should call handleToggle on icon button focus and space', () => {
    /* wrapper
      .find('[data-test="collapsable-box-icon-button"]')
      .simulate('keydown', { keyCode: 32 });
      */
  });
  it('should render non scrollable content if passed', () => {
    const props = getProps({ nonScrollableContent: <h1>Does not Scroll</h1> });
    const wrapper = shallow(
      <CollapsableBox {...props}>
        <div />
      </CollapsableBox>,
    );
    expect(
      wrapper
        .find('[data-test="collapsable-box-non-scrollable-content"]')
        .children()
        .html(),
    ).toBe('<h1>Does not Scroll</h1>');
  });
  it('should not render non scrollable content if not passed', () => {
    const props = getProps({ nonScrollableContent: null });
    const wrapper = shallow(
      <CollapsableBox {...props}>
        <div />
      </CollapsableBox>,
    );
    expect(
      wrapper.find('[data-test="collapsable-box-non-scrollable-content"]')
        .length,
    ).toBe(0);
  });
  it('should not render non scrollable content if not passed', () => {
    const wrapper = shallow(
      <CollapsableBox {...getProps()}>
        <div data-test="child" />
      </CollapsableBox>,
    );
    expect(wrapper.find('[data-test="child"]').length).toBe(1);
  });
  it('should add the scrollable class if passed scrollable is true', () => {
    const props = getProps({ scrollable: true });
    const wrapper = shallow(
      <CollapsableBox {...props}>
        <div data-test="child" />
      </CollapsableBox>,
    );
    expect(
      wrapper.find('[data-test="collapsable-box-children-container"]').props()
        .className,
    ).toContain('collapsable-box__body--scrollable');
  });
  it('should not include the scrollable class if passed scrollable is false', () => {
    const props = getProps({ scrollable: false });
    const wrapper = shallow(
      <CollapsableBox {...props}>
        <div data-test="child" />
      </CollapsableBox>,
    );
    expect(
      wrapper.find('[data-test="collapsable-box-children-container"]').props()
        .className,
    ).not.toContain('collapsable-box__body--scrollable');
  });
});
