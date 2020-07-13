import React from 'react';
import { mount } from 'enzyme';
import NestedDropdownMenu from './NestedDropdownMenu';

jest.disableAutomock();

const ANIMALS = [
  {
    label: 'Dogs',
    value: 'dogs',
    allowAddNew: true,
    children: [
      { label: 'Bulldog', value: 'bulldog' },
      { label: 'Poodle', value: 'poodle' },
      { label: 'Alaskan Malamute', value: 'alaskan-malamute' },
    ],
  },
  {
    label: 'Cats',
    value: 'cats',
  },
  {
    label: 'Turtles',
    value: 'turtles',
    allowAddNew: true,
  },
];

const buildProps = (props) => ({
  isOpen: true,
  showFilter: true,
  closeOnOutsideClick: true,
  items: ANIMALS,
  onClose: () => {},
  onItemClick: () => {},
  onAddNewClick: () => {},
  placement: 'bottom',
  ...props,
});

describe('NestedDropdownMenu', () => {
  it('Renders just the child trigger when not open', () => {
    const wrapper = mount(
      <NestedDropdownMenu {...buildProps({ isOpen: false })}>
        <button data-test="ndm-test-btn">test</button>
      </NestedDropdownMenu>,
    );

    expect(wrapper.find('[data-test="ndm-test-btn"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="ndm-placement"]').exists()).toBe(false);
  });

  it('Panel 1: Renders items but does not render back button or filter', () => {
    const wrapper = mount(
      <NestedDropdownMenu {...buildProps()}>
        <button data-test="ndm-test-btn">test</button>
      </NestedDropdownMenu>,
    );

    expect(wrapper.find('[data-test="ndm-filter"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="ndm-back-btn"]').exists()).toBe(false);
  });

  it('An individual item onclick handler takes priority over prop', () => {
    const onItemClick = jest.fn();
    const propOnItemClick = jest.fn();
    const ITEMS = [
      ...ANIMALS,
      {
        onItemClick,
        label: 'Snakes',
        value: 'snakes',
      },
    ];
    const wrapper = mount(
      <NestedDropdownMenu
        {...buildProps({ items: ITEMS, onItemClick: propOnItemClick })}
      >
        <button data-test="ndm-test-btn">test</button>
      </NestedDropdownMenu>,
    );

    wrapper.find('#snakes').simulate('click');
    expect(propOnItemClick).toHaveBeenCalledTimes(0);
    expect(onItemClick).toHaveBeenCalledTimes(1);
  });

  it('When clicking an item without children, the onItemClick prop fires', () => {
    const propOnItemClick = jest.fn();

    const wrapper = mount(
      <NestedDropdownMenu {...buildProps({ onItemClick: propOnItemClick })}>
        <button data-test="ndm-test-btn">test</button>
      </NestedDropdownMenu>,
    );

    expect(propOnItemClick).toHaveBeenCalledTimes(0);
    wrapper.find('#cats').simulate('click');
    expect(propOnItemClick).toHaveBeenCalledTimes(1);
  });

  it('Successfully dives into child panel', () => {
    const wrapper = mount(
      <NestedDropdownMenu {...buildProps()}>
        <button data-test="ndm-test-btn">test</button>
      </NestedDropdownMenu>,
    );

    expect(wrapper.find('.panel-1').exists()).toBe(false);
    wrapper.find('#dogs').simulate('click');
    wrapper.update();
    expect(wrapper.find('.panel-1').exists()).toBe(true);
  });

  it('Shows add new in the header when children already exist for parent', () => {
    const wrapper = mount(
      <NestedDropdownMenu {...buildProps()}>
        <button data-test="ndm-test-btn">test</button>
      </NestedDropdownMenu>,
    );

    expect(wrapper.find('[data-test="ndm-add-new-btn"]').exists()).toBe(false);
    wrapper.find('#dogs').simulate('click');
    wrapper.update();
    expect(wrapper.find('[data-test="ndm-add-new-btn"]').exists()).toBe(true);
  });

  it('Shows add new as a child row when children do not exist for parent', () => {
    const wrapper = mount(
      <NestedDropdownMenu {...buildProps()}>
        <button data-test="ndm-test-btn">test</button>
      </NestedDropdownMenu>,
    );

    expect(wrapper.find('[data-test="ndm-add-new-row"]').exists()).toBe(false);
    wrapper.find('#turtles').simulate('click');
    wrapper.update();
    expect(wrapper.find('[data-test="ndm-add-new-btn"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="ndm-add-new-row"]').exists()).toBe(true);
  });

  it('Filters results when using search', () => {
    const wrapper = mount(
      <NestedDropdownMenu {...buildProps()}>
        <button data-test="ndm-test-btn">test</button>
      </NestedDropdownMenu>,
    );

    // Click on "Dogs" to dive into nested list
    wrapper.find('#dogs').simulate('click');
    wrapper.update();

    // Expect all 3 dogs to show in the list
    expect(
      wrapper
        .find('.panel-1')
        .children()
        .find('[data-test="ndm-list-item"]').length,
    ).toBe(3);

    // Simulate search for "alaskan" and update
    wrapper
      .find('[data-test="ndm-search-input"]')
      .simulate('change', { target: { value: 'alaskan' } });
    wrapper.update();

    // Expect only "Alaskan Malamute" to shup up.
    expect(
      wrapper
        .find('.panel-1')
        .children()
        .find('[data-test="ndm-list-item"]').length,
    ).toBe(1);
  });
});
