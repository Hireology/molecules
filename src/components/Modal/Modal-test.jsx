import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

jest.disableAutomock();

const getProps = (props) => ({
  isOpen: false,
  onClose: () => {},
  ...props,
});

describe('Modal', () => {
  /**
   * Verify that the closeOnOverlayClick prop works
   */
  it('isOpen toggles the modal visibility', () => {
    const props = getProps();
    const wrapper = shallow(<Modal {...props}>foo</Modal>);

    // Modal is absent on default and does not show
    expect(wrapper.find('[data-test="modal"]').length).toBe(0);

    // Shows the modal when isOpen is true
    wrapper.setProps({ isOpen: true });
    expect(wrapper.find('[data-test="modal"]').length).toBe(1);
  });

  /**
   * Verify that the showOverlay prop works when active and hides when set
   * to false
   */
  it('showOverlay toggles the dialog overlay visibility', () => {
    const props = getProps({ isOpen: true });
    const wrapper = shallow(<Modal {...props}>foo</Modal>);

    // Found with default props
    expect(wrapper.find('.modal__backdrop').length).toBe(1);

    // Hidden when showOverlay is false
    wrapper.setProps({ showOverlay: false });
    expect(wrapper.find('.modal__backdrop').length).toBe(0);
  });

  /**
   * Verify that the showOverlay prop works when active and hides when set
   * to false
   */
  it('correctly uses the variant options', () => {
    const props = getProps({ isOpen: true });
    const wrapper = shallow(<Modal {...props}>foo</Modal>);

    // Default value
    expect(wrapper.find('.modal__dialog').length).toBe(1);
    expect(wrapper.find('.modal__dialog--wide').length).toBe(0);
    expect(wrapper.find('.modal__dialog--full').length).toBe(0);

    // Default value
    wrapper.setProps({ variant: 'wide' });
    expect(wrapper.find('.modal__dialog').length).toBe(1);
    expect(wrapper.find('.modal__dialog--wide').length).toBe(1);
    expect(wrapper.find('.modal__dialog--full').length).toBe(0);

    // Default value
    wrapper.setProps({ variant: 'full' });
    expect(wrapper.find('.modal__dialog').length).toBe(1);
    expect(wrapper.find('.modal__dialog--wide').length).toBe(0);
    expect(wrapper.find('.modal__dialog--full').length).toBe(1);
  });

  /**
   * Verify that the isLoadingContent prop works as intended and displayed when
   * true
   */
  it('displays the loading component when isLoadingContent is true', () => {
    const props = getProps({ isOpen: true, isLoadingContent: true });
    const wrapper = shallow(<Modal {...props}>foo</Modal>);

    // Displays the loader
    expect(wrapper.find('Loader').length).toBe(1);
  });

  /**
   * Verify that the closeOnOverlayClick prop works when clicking outside
   * of the modal body and firing off the onClose prop
   */
  it('only fires the onClose function when closeOnOverlayClick is true', () => {
    const onCloseMock = jest.fn();
    const event = { target: { id: 'backdrop' } };
    const props = getProps({ isOpen: true, onClose: onCloseMock });
    const wrapper = shallow(<Modal {...props}>foo</Modal>);

    // With default props, clicking the background fires the onClose prop
    wrapper.find('#backdrop').simulate('click', event);
    expect(onCloseMock).toHaveBeenCalledTimes(1);

    // When closeOnOverlay is false, we shouldn't get any new closing calls
    wrapper.setProps({ closeOnOverlayClick: false });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  /**
   * Verify that the closeOnEsc prop works as it should by watching for the keydown event
   * and firing the onClose function when the keydown event is fired
   */
  it('only fires the onClose function on esc key press when closeOnEsc is true', () => {
    const onCloseMock = jest.fn();
    const map = {};
    window.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const props = getProps({ isOpen: true, onClose: onCloseMock });
    shallow(<Modal {...props}>foo</Modal>);

    map.keydown({ keyCode: 27 });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  /**
   * Verify that the closeOnEsc prop works as it should by watching
   * that the event listener is never added if closeOnEsc is false
   */
  it('does not add even listener when closeOnEsc is false', () => {
    window.addEventListener = jest.fn();
    const props = getProps({ isOpen: true, closeOnEsc: false });
    shallow(<Modal {...props}>foo</Modal>);
    expect(window.addEventListener).toHaveBeenCalledTimes(0);
  });

  /**
   * Verify that all child components included in the Modal display
   */
  it('renders nested modal components when included', () => {
    const props = getProps({ isOpen: true });
    const wrapper = shallow(
      <Modal {...props}>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>,
    );

    // All children are ready to play
    expect(wrapper.find('ModalHeader').length).toBe(1);
    expect(wrapper.find('ModalBody').length).toBe(1);
    expect(wrapper.find('ModalFooter').length).toBe(1);
  });
});
