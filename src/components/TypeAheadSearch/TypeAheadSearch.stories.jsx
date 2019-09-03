import React from 'react';
import { storiesOf } from '@storybook/react';
import TypeAheadSearch from './TypeAheadSearch';

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
  { name: 'john adam robinson', job: 'Medical Assistant', id: 24 },
];

class StorybookTypeAheadSearch extends React.Component {
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

const notes = {
  notes: {
    markdown: `
      #TypeAheadSearch
      ## Props
      | prop name   | prop type        | required | default value | description |
      | ----------- | ---------------- | -------- | ------------- | ----------- |
      | onSubmit    | Function         | true     | -             | Function to be called when filter is submitted, the array of items to be displayed is passed as a prop |
      | data        | Array of objects | true     | -             | The data to be filtered, each item in array should be formatted { value: string, id: number } |
      | placeholder | String           | false    | ''            | Placeholder text to be displayed before input is changed |
      `,
  },
};

storiesOf('TypeAheadSearch', module).add(
  'default',
  () => <StorybookTypeAheadSearch />,
  notes,
);
