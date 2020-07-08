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
    ],
  },
  {
    label: 'Cats',
    value: 'cats',
  },
  {
    label: 'Turtles',
    value: 'turles',
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
});
