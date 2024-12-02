import React from 'react';
import { render, screen } from '@testing-library/react';
import UserTable from './UserTable'; // Import your UserTable component
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataColumns.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableUserColumns";

describe('UserTable Component', () => {
  test('renders a table with user data', () => {

    // Render the UserTable component with the sample user data
    render(<UserTable
      tableData={tableDataTopCreators}
      columnsData={tableColumnsTopCreators}
    />);

    // Assert that the table headers and user data are present in the rendered component
    const tableHeaders = screen.getAllByRole('columnheader');
    const userDataCells = screen.getAllByRole('cell');

    // Assuming your table headers include 'Name', 'Email', and 'Role'
    expect(tableHeaders).toHaveLength(3);
    expect(tableHeaders[0]).toHaveTextContent('Name');
    expect(tableHeaders[1]).toHaveTextContent('Email');
    expect(tableHeaders[2]).toHaveTextContent('Role');

    // Check if user data is rendered
    expect(userDataCells).toHaveLength(tableDataTopCreators.length * 3); // Assuming 3 columns per user
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('Member')).toBeInTheDocument();
  });
});
