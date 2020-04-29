/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

const styles = {
  wrapper: {
    display: 'flex',
    padding: '1rem',
    margin: '0 auto',
    width: '80%',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  formGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gridGap: '20px',
    marginBottom: '15px',
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '15px',
  },
  label: {
    display: 'block',
    fontSize: '0.9em',
    marginBottom: '0.3em',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1em',
    lineHeight: '1.2',
    marginBottom: '0.6em',
    padding: '0.6em',
    width: '100%',
  },
};

const notes = {
  notes: {
    markdown: `
      # Modal
      ## Components
      ### Modal *(required)*
      The Modal component is the component is the main component and is required in order to display anything in a dialog.

      ### ModalHeader
      The ModalHeader component is semi-controlled in that it defaults to showing a "x" icon to close the modal. 
      If you'd like to use your own icon to close the modal, you'd set the hideCloseIcon prop to true.

      ### ModalBody
      The ModalBody component contains the main content to be displayed in the modal. It basically applies generic 
      spacing to keep modals looking consistent across the app.

      ### ModalFooter
      The ModalFooter is where our buttons will go that contain actions to perform whatever you may need on the content.  
      Most commonly, we'd throw in a "cancel" and "save" button.
      
      ## Props
      | prop name           | prop type | required | default value | description |
      | -----------         | --------- | -------- | ------------- | ----------- |
      | aria                | string    | false    | Model Dialog  | String for the "aria-labeledby" attribute of the modal |
      | children            | node      | false    | -             | React components rendered inside the modal |
      | closeOnEsc          | bool      | false    | true          | Whether or not we should close the modal when the "ESC" key is hit |
      | closeOnOverlayClick | bool      | false    | true          | Whether or not we should close the modal when the modal overlay is clicked |
      | isLoadingContent    | bool      | false    | false         | If we're loading content, we can display a generic loading icon here |
      | isOpen              | bool      | true     | false         | When or not the modal is open |
      | onClose             | func      | true     | -             | Function to close the modal |
      | showOverlay         | bool      | false    | true          | Whether or not to show the modal overlay |

      # ModalHeader
      ## Props
      | prop name     | prop type   | required | default value | description |
      | -----------   | ----------- | -------- | ------------- | ----------- |
      | children      | node/string | false    | -             | React component rendered inside the modal header or a string title |
      | hideCloseIcon | bool        | false    | false         | Optional prop for showing the modal "x" for closing it |
      | onClose       | func        | true     | -             | Function to close the modal - used by close icon (required if the icon isn't hid) |
    `,
  },
};

class BasicModalStory extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.wrapper}>
          <h2>Basic Modal</h2>
          <p>
            The modal component exports 4 components: The Modal, ModalHeader,
            ModalBody, and ModalFooter. Of these 4, just the Modal is required,
            but the use of the other Modal components is encouraged.
          </p>
          <p>
            This example is simply placing text in each on of the Modals nested
            components
          </p>
          <Button
            type="primary"
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            Launch Modal
          </Button>

          <Modal
            isOpen={this.state.isOpen}
            onClose={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            <ModalHeader
              onClose={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              Modal Header
            </ModalHeader>
            <ModalBody>Modal Body</ModalBody>
            <ModalFooter>Modal Footer</ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

class AdvancedModalStory extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.wrapper}>
          <h2>Advanced Modal</h2>
          <p>
            This modal is also using all 4 components, but placing child
            elements inside each of the Modals sub-components (ModalHeader,
            ModalBody, ModalFooter) in order to customize the content but keep
            consistency.
          </p>
          <p>
            Note that this component is component is controlled by the parent
            and requires anything state related to be sent into the component
            via children or props.
          </p>
          <Button
            type="primary"
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            Launch Modal
          </Button>

          <Modal
            isOpen={this.state.isOpen}
            onClose={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            <ModalHeader
              onClose={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              Add New Applicant
            </ModalHeader>
            <ModalBody>
              <div style={styles.formGroup}>
                <div style={styles.formControl}>
                  <label htmlFor="firstName" style={styles.label}>
                    First Name
                  </label>
                  <input id="firstName" style={styles.input} type="text" />
                </div>
                <div style={styles.formControl}>
                  <label htmlFor="lastName" style={styles.label}>
                    Last Name
                  </label>
                  <input id="lastName" style={styles.input} type="text" />
                </div>
              </div>
              <div style={styles.formGroup}>
                <div style={styles.formControl}>
                  <label htmlFor="email" style={styles.label}>
                    Email Address
                  </label>
                  <input id="email" style={styles.input} type="email" />
                </div>
              </div>
              <div style={styles.formGroup}>
                <div style={styles.formControl}>
                  <label htmlFor="phone" style={styles.label}>
                    Phone Number
                  </label>
                  <input id="phone" style={styles.input} type="text" />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                type="outline"
              >
                Cancel
              </Button>
              <Button
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                type="secondary"
              >
                Add Applicant
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

storiesOf('Modal', module)
  .add('Basic', () => <BasicModalStory />, notes)
  .add('Advanced', () => <AdvancedModalStory />, notes);
