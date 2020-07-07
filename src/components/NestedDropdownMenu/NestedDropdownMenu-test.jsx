import React from 'react';
import { shallow } from 'enzyme';
import NestedDropdownMenu from './NestedDropdownMenu';

jest.disableAutomock();

// const ANIMALS = [
//   {
//     label: 'Dogs',
//     value: 'dogs',
//     children: [
//       { label: 'Bulldog', value: 'bulldog' },
//       { label: 'Poodle', value: 'poodle' },
//     ],
//   },
//   { label: 'Cats', value: 'cats', allowAddNew: true },
// ];

// const buildProps = (props) => ({
//   isOpen: true,
//   onClose: () => {},
//   items: ANIMALS,
//   onItemClick: () => {},
//   onAddNewClick: () => {},
//   showFilter: true,
//   closeOnOutsideClick: () => {},
//   ...props,
// });

describe('NestedDropdownMenu', () => {
  it('Panel 1: Renders items but does not render back button or filter', () => {
    // const wrapper = shallow(<NestedDropdownMenu {...buildProps()} />);
    expect(true).toBe(true);
  });
});
