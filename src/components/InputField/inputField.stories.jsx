import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import InputField from './InputField';

const typeTypes = "'text', 'email', 'phone', 'password', 'url', or 'number'";

const notes = {
  notes: {
    markdown: `
      # Input Field
      ## Props
      | prop name            | prop type              | required | default value | description |
      | -------------------- | ---------------------- | -------- | ------------- | ----------- |
      | additionalClassNames | String                 | false    | -             | Content to be displayed in body of box |
      | id                   | String                 | false    | -             | Whether or not the body of the box should be expanded |
      | placeholder          | String                 | true     | null          | Any content that should not scroll inside a scrollable box |
      | name                 | String                 | true     | -             | Title of box |
      | maxLength            | String                 | false    | -             | Whether or not the body of the box should be scrollable after 200px |
      | value                | String                 | false    | -             | Function to handle toggle |
      | onChange             | Function               | true     | -             | Function to handle toggle |
      | type                 | ${typeTypes}           | false    | text          | Function to handle toggle |
    `,
  },
};
class InputFieldTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      emailInputValue: '',
      phoneInputValue: '',
      urlInputValue: '',
      numberInputValue: '',
      disabledInputValue: '',
    };
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="inputFieldList">
        <InputField
          onChange={this.handleChange}
          value={this.state.textInputValue}
          additionalClassNames="inputClassName"
          type="text"
          name="textInputValue"
          maxLength="20"
          required="true"
          id="inputId"
          placeholder="Text input"
        />
        <InputField
          onChange={this.handleChange}
          value={this.state.emailInputValue}
          additionalClassNames="inputClassName"
          type="email"
          name="emailInputValue"
          maxLength="20"
          required="true"
          id="inputId"
          placeholder="Email input"
        />
        <InputField
          onChange={this.handleChange}
          value={this.state.phoneInputValue}
          additionalClassNames="inputClassName"
          type="Phone"
          name="phoneInputValue"
          maxLength="20"
          required="true"
          id="inputId"
          placeholder="Phone input"
        />
        <InputField
          onChange={this.handleChange}
          value={this.state.urlInputValue}
          additionalClassNames="inputClassName"
          type="url"
          name="urlInputValue"
          maxLength="20"
          required="true"
          id="inputId"
          placeholder="Url input"
        />
        <InputField
          onChange={this.handleChange}
          value={this.state.numberInputValue}
          additionalClassNames="inputClassName"
          type="number"
          name="numberInputValue"
          maxLength="20"
          required="true"
          id="inputId"
          placeholder="Number input"
        />
        <InputField
          onChange={this.handleChange}
          value={this.state.disabledInputValue}
          additionalClassNames="inputClassName"
          type="number"
          name="disabledInputValue"
          maxLength="20"
          disabled="false"
          id="inputId"
          placeholder="Disabled input"
        />
      </div>
    );
  }
}

storiesOf('InputField', module).add('types', () => <InputFieldTypes />, notes);
