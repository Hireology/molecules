/* eslint-disable react/no-unescaped-entities */
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
  code: {
    backgroundColor: '#fafafa',
    padding: '0.5rem',
    marginBottom: '1rem',
  },
  gif: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

  toggleModal = (variant = 'default') => {
    this.setState({
      isOpen: true,
      variant,
    });
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
          <Button type="primary" onClick={() => this.toggleModal()}>
            Launch Default Modal
          </Button>
          <br />
          <Button type="primary" onClick={() => this.toggleModal('wide')}>
            Launch Wide Modal
          </Button>
          <br />
          <Button type="primary" onClick={() => this.toggleModal('full')}>
            Launch Full Modal
          </Button>

          <Modal
            isOpen={this.state.isOpen}
            variant={this.state.variant}
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
    isLoading: false,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        [id]: value,
      },
    });
  };

  submitApplicant = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        isOpen: false,
      });
    }, 2000);
  };

  resetForm = () => {
    this.setState({
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    });
  };

  openModal = () => {
    this.setState({
      form: {},
      isOpen: true,
    });
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
          <div style={styles.code}>
            <pre>
              <code>{JSON.stringify(this.state.form, null, 2)}</code>
            </pre>
          </div>
          <Button type="primary" onClick={() => this.openModal()}>
            Launch Modal
          </Button>

          <Modal
            isOpen={this.state.isOpen}
            onClose={() => this.setState({ isOpen: !this.state.isOpen })}
            isLoadingContent={this.state.isLoading}
          >
            <ModalHeader
              onClose={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              Add New Applicant
            </ModalHeader>
            <ModalBody>
              <p>
                We're no strangers to love; you know the rules and so do I. A
                full commitment's what I'm thinking of; you wouldn't get this
                from any other guy.
              </p>
              <p>
                I just wanna tell you how I'm feeling; gotta make you
                understand.
              </p>
              <p>
                Never gonna give you up, never gonna let you down; never gonna
                run around and desert you. Never gonna make you cry, never gonna
                say goodbye, never gonna tell a lie and hurt you
              </p>
              <div style={styles.gif}>
                <img
                  src="https://media3.giphy.com/media/ZE5DmCqNMr3yDXq1Zu/source.gif"
                  alt="Never gonna give you up!"
                  height="300px"
                  width="300px"
                />
              </div>
              <hr />
              <div style={styles.formGroup}>
                <div style={styles.formControl}>
                  <label htmlFor="firstName" style={styles.label}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    style={styles.input}
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.firstName}
                  />
                </div>
                <div style={styles.formControl}>
                  <label htmlFor="lastName" style={styles.label}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    style={styles.input}
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.lastName}
                  />
                </div>
              </div>
              <div style={styles.formGroup}>
                <div style={styles.formControl}>
                  <label htmlFor="email" style={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    style={styles.input}
                    type="email"
                    onChange={this.handleChange}
                    value={this.state.form.email}
                  />
                </div>
              </div>
              <div style={styles.formGroup}>
                <div style={styles.formControl}>
                  <label htmlFor="phone" style={styles.label}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    style={styles.input}
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.phone}
                  />
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
              <Button onClick={() => this.submitApplicant()} type="secondary">
                Add Applicant!
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

class LoadingModalStory extends React.Component {
  state = {
    isOpen: true,
    isLoading: false,
  };

  onLoadingClick = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  };

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.wrapper}>
          <h2>Basic Modal</h2>
          <p>
            Showing a loading state in a modal dialog is perfect for situations
            that require a user's input and backend validation. It allows us to
            keep state injected into the modal and wait for a response before
            clearing.
          </p>
          <Button
            type="primary"
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            Launch Modal
          </Button>

          <Modal
            isLoadingContent={this.state.isLoading}
            isOpen={this.state.isOpen}
            onClose={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            <ModalHeader
              onClose={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              Modal Header
            </ModalHeader>
            <ModalBody>
              Click the button below to get an idea of what it would look like
              to submit a form and wait for a response BEFORE closing a modal...
              Imagine the form state saved and a much better UX!
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => this.onLoadingClick()} type="outline">
                Toggle Loading!!!
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
  .add('Advanced', () => <AdvancedModalStory />, notes)
  .add('Loading', () => <LoadingModalStory />, notes);
