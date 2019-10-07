/* eslint-disable react/no-multi-comp */
/* eslint-disable no-unused-vars */
import React from 'react';
import { storiesOf } from '@storybook/react';
import TypeAheadSearch from './TypeAheadSearch';
import Loader from '../Loader';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import { filterData, sortFilteredData } from './util';

const DATA = [
  { name: 'Mario Speedwagon', job: 'Marketing Coordinator', id: 1 },
  { name: 'Petey Cruiser', job: 'Web Designer', id: 2 },
  { name: 'Anna Sthesia', job: 'President of Sales', id: 3 },
  { name: 'Paul Molive', job: 'Marketing Coordinator', id: 4 },
  { name: 'Anna Mull', job: 'Nursing Assistant', id: 5 },
  { name: 'Gail Forcewind', job: 'Nursing Assistant', id: 6 },
  { name: 'Paige Turner', job: 'Medical Assistant', id: 7 },
  { name: 'Bob Frapples', job: 'Dog Trainer', id: 8 },
  { name: 'Walter Melon', job: 'Project Manager', id: 9 },
  { name: 'Nick R. Bocker', job: 'Medical Assistant', id: 10 },
  { name: 'Barb Ackue', job: 'Nursing Assistant', id: 11 },
  { name: 'Buck Kinnear', job: 'Librarian', id: 12 },
  { name: 'Greta Life', job: 'Marketing Coordinator', id: 13 },
  { name: 'Ira Membrit', job: 'Project Manager', id: 14 },
  { name: 'Shonda Leer', job: 'Project Manager', id: 15 },
  { name: 'Brock Lee', job: 'Nursing Assistant', id: 16 },
  { name: 'Maya Didas', job: 'Librarian', id: 17 },
  { name: 'Pete Sariya', job: 'Web Designer', id: 18 },
  { name: 'Monty Carlo', job: 'Medical Assistant', id: 19 },
  { name: 'Sal Monella', job: 'Medical Assistant', id: 20 },
  { name: 'Adam Robinson', job: 'Medical Assistant', id: 21 },
  { name: 'John Adamson', job: 'Medical Assistant', id: 22 },
  { name: 'John Adam Robinson', job: 'Medical Assistant', id: 25 },
  { name: 'adam smith', job: 'Medical Assistant', id: 23 },
  { name: 'sara adams', job: 'Medical Assistant', id: 24 },
  { name: 'john adam robinson', job: 'Medical Assistant', id: 26 },
];

class TypeAheadSearchWithData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredIds: null,
    };
  }

  onSubmit = (options) => {
    const filteredIds = options.map((option) => option.id);
    this.setState({ filteredIds });
  };

  render() {
    const displayedData = !this.state.filteredIds
      ? DATA
      : DATA.filter((data) => this.state.filteredIds.includes(data.id));
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <TypeAheadSearch
          onSubmit={this.onSubmit}
          placeholder="Search employees by employee name"
          data={DATA.map((employee) => ({
            value: employee.name,
            id: employee.id,
          }))}
        />
        <table style={{ width: '100%', marginTop: 40 }}>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Job Title</th>
              <th>Employee Id</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>{employee.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class TypeAheadSearchWithCustomFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: true,
      data: [],
      suggestions: [],
    };
  }
  componentDidMount() {
    // DEV NOTE: In the app, this would fetch the first page of data from the API
    new Promise((resolve) => {
      const wait = setTimeout(() => {
        clearTimeout(wait);
        resolve(DATA.slice(this.state.page - 1, this.state.page * 10));
      }, 1000);
    }).then((data) => {
      this.setState({
        data,
        loading: false,
      });
    });
  }

  onChange = (filterText) => {
    console.log('onchange called');
    // DEV NOTE: In the app, this would fetch the suggestions based on the passed
    // filter text from the API
    new Promise((resolve) => {
      const wait = setTimeout(() => {
        clearTimeout(wait);
        const data = DATA.map((d) => ({ value: d.name, id: d.id }));
        const filteredData = filterData(data, filterText);
        const sortedFilteredData = sortFilteredData(filteredData, filterText);
        resolve(sortedFilteredData.slice(0, 5));
      }, 1000);
    }).then((suggestions) => {
      this.setState({
        suggestions,
      });
    });
  };

  onSubmit = (filterText) => {
    // DEV NOTE: In the app, this would fetch the filtered data based on
    // the submitted filter text from the API
    new Promise((resolve) => {
      const wait = setTimeout(() => {
        clearTimeout(wait);
        const data = DATA.map((d) => ({ value: d.name, id: d.id }));
        const filteredData = filterData(data, filterText);
        const filteredIds = filteredData.map((f) => f.id);
        const mapFilteredData = DATA.filter((d) => filteredIds.includes(d.id));
        resolve(
          mapFilteredData.length > 10
            ? mapFilteredData.slice(0, 10)
            : mapFilteredData,
        );
      }, 1000);
    }).then((data) => {
      this.setState({
        data,
        page: 1,
        suggestions: [],
      });
    });
  };

  buttonClick = (next) => {
    const page = next ? this.state.page + 1 : this.state.page - 1;
    this.setState({ loading: true, page });
    // DEV NOTE: In the app this would fetch the new page of data from the API
    new Promise((resolve) => {
      const wait = setTimeout(() => {
        clearTimeout(wait);
        resolve(DATA.slice((page - 1) * 10, page * 10));
      }, 1000);
    }).then((data) => {
      this.setState({
        data,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <TypeAheadSearch
          onSubmit={this.onSubmit}
          placeholder="Search employees by employee name"
          useCustomFilter
          onChange={this.onChange}
          suggestions={this.state.suggestions}
        />
        {this.state.loading && <Loader />}
        {!this.state.loading && (
          <table style={{ width: '100%', margin: '40px auto' }}>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Job Title</th>
                <th>Employee Id</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.job}</td>
                  <td>{employee.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div
          style={{ marginTop: this.state.loading ? 335 : 0, marginBottom: 40 }}
        >
          <ButtonGroup align="justified">
            <Button
              disabled={this.state.page === 1}
              type="outline"
              onClick={() => this.buttonClick(false)}
            >
              Previous Page
            </Button>
            <Button
              disabled={this.state.page * 10 >= DATA.length}
              type="outline"
              onClick={() => this.buttonClick(true)}
            >
              Next Page
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

const notes = {
  notes: {
    markdown: `
      #TypeAheadSearch
      ## Props
      | prop name       | prop type        | required                    | default value | description |
      | --------------- | ---------------- | --------------------------- | ------------- | ----------- |
      | onSubmit        | Function         | true                        | -             | Function to be called when filter is submitted, the filtered data and search input passed if isCustomFilter is false, just the search input if isCustomFilter is true |
      | initialFilter   | String           | false                       | ''            | An initial filter to be displayed in the input |
      | placeholder     | String           | false                       | ''            | Placeholder text to be displayed before input is changed |
      | useCustomFilter | Boolean          | false                       | false         | Determines if the component should use it's default logic to find suggestions/filter passed in data, or use passed in suggestions |
      | data            | Array of objects | if useCustomFilter is false | null          | The data used to find suggestions if isCustomFilter is false, should be formatted { value: string, id: number } |
      | onChange        | Function         | if useCustomFilter is true  | () => null    | Callback function for input change only called if isCustomFilter is true |
      | suggestions     | Array of objects | if useCustomFilter is true  | null          | The suggestions to be displayed if isCustomFilter is true, should be formatted { value: string, id: number } |
      
      ## Example for TypeAheadSearch handling suggestions/filtering:
      \`\`\`
      const onSubmit = (filteredData, filter) => {(
        const filteredIds = filteredData.map((f) => f.id);
        const dataToBeDisplayed = this.props.data.filter((d) => filteredIds.contains(d.id));
        this.setState({dataToBeDisplayed});
      )};
      <TypeAheadSearch
        onSubmit
        placeholder="Search employees by employee name"
        data={this.props.data.map((employee) => ({
          value: employee.name,
          id: employee.id,
        }))}
      />
      \`\`\`

      ## Example for child component handling suggestions/filtering:
      \`\`\`
      const onSubmit = (filter) => {
        // Applies logic or calls API to filter the data with passed back string
      }
      const onChange = (filter) => {
        // Applies logic or calls API to update array of suggestions
      }
      <TypeAheadSearch
        onSubmit={this.onSubmit}
        placeholder="Search employees by employee name"
        useCustomFilter
        onChange={this.onChange}
        suggestions={this.props.suggestions.map((employee) => ({
          value: employee.name,
          id: employee.id,
        }))}
      />
      \`\`\`
      `,
  },
};

storiesOf('TypeAheadSearch', module)
  .add('default', () => <TypeAheadSearchWithData />, notes)
  .add(
    'simulate paginated api',
    () => <TypeAheadSearchWithCustomFilter />,
    notes,
  );
