import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

jest.disableAutomock();

const setModalProps = (props) => ({
  closeOnEsc: false,
  closeOnOverlayClick: false,
  isLoadingContent: false,
  isOpen: false,
  onClose: () => {},
  showOverlay: false,
  ...props,
});

const setModalHeaderProps = (props) => ({
  hideCloseIcon: false,
  onClose: () => {},
  ...props,
});

describe('Modal', () => {
  describe('Modal', () => {
    it('renders', () => {
      const props = setModalProps({ isOpen: true });
      const wrapper = shallow(<Modal {...props}>foo</Modal>);
      expect(wrapper.find('#backdrop').length).toBe(1);
    });

    it('should not be displayed', () => {
      const props = setModalProps();
      const wrapper = shallow(<Modal {...props}>foo</Modal>);
      expect(wrapper.find('#backdrop').hasClass('is-open')).toBe(false);
    });

    it('should render one child', () => {
      const props = setModalProps({ isOpen: true });
      const wrapper = shallow(<Modal {...props}>foo</Modal>);
      expect(wrapper.length).toBe(1);
    });

    it('renders all modal subcomponents', () => {
      const modalProps = setModalProps();
      const modalHeaderProps = setModalHeaderProps();

      const wrapper = shallow(
        <Modal {...modalProps}>
          <ModalHeader {...modalHeaderProps}>Header</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </Modal>,
      );

      expect(wrapper.find('.modal').exists()).toBe(true);
      expect(wrapper.find('ModalHeader').exists()).toBe(true);
      expect(wrapper.find('ModalBody').exists()).toBe(true);
      expect(wrapper.find('ModalFooter').exists()).toBe(true);
    });

    it('renders all modal subcomponents', () => {
      const modalProps = setModalProps({ isOpen: true });
      const modalHeaderProps = setModalHeaderProps();

      const wrapper = shallow(
        <Modal {...modalProps}>
          <ModalHeader {...modalHeaderProps}>Header</ModalHeader>
          <ModalBody>Foo</ModalBody>
          <ModalFooter>Foo</ModalFooter>
        </Modal>,
      );

      expect(wrapper.find('.modal').exists()).toBe(true);
      expect(wrapper.find('ModalHeader').exists()).toBe(true);
      expect(wrapper.find('ModalBody').exists()).toBe(true);
      expect(wrapper.find('ModalFooter').exists()).toBe(true);
    });

    it('closes when triggered', () => {
      const modalProps = setModalProps({ isOpen: true });
      const wrapper = shallow(<Modal {...modalProps}>Foo</Modal>);

      expect(wrapper.find('#backdrop').hasClass('is-open')).toBe(true);
      wrapper.setProps({ isOpen: false });
      expect(wrapper.find('#backdrop').hasClass('is-open')).toBe(false);
    });
  });

  describe('ModalHeader', () => {
    it('renders', () => {
      const props = setModalHeaderProps();
      const wrapper = shallow(<ModalHeader {...props}>foo</ModalHeader>);
      expect(wrapper.find('.modal-header').length).toBe(1);
    });

    it('should render two children (title and exit button)', () => {
      const props = setModalHeaderProps();
      const wrapper = shallow(
        <ModalHeader {...props}>
          <h1>foo</h1>
        </ModalHeader>,
      );
      expect(wrapper.find('h1').exists()).toBe(true);
      expect(wrapper.find('i').exists()).toBe(true);
    });

    it('should not display the onClose icon', () => {
      const props = setModalHeaderProps({ hideCloseIcon: true });
      const wrapper = shallow(
        <ModalHeader {...props}>
          <h1>foo</h1>
        </ModalHeader>,
      );
      expect(wrapper.find('i').exists()).toBe(false);
    });
  });

  describe('ModalBody', () => {
    it('renders', () => {
      const wrapper = shallow(<ModalBody>foo</ModalBody>);
      expect(wrapper.find('.modal-body').length).toBe(1);
    });
  });

  describe('ModalFooter', () => {
    it('renders', () => {
      const wrapper = shallow(<ModalFooter>foo</ModalFooter>);
      expect(wrapper.find('.modal-footer').length).toBe(1);
    });
  });
});
