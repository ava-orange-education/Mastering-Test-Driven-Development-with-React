import React from 'react';
import { render } from '@testing-library/react';
import ComplexTable from './components/ComplexTable';
import '@testing-library/jest-dom'

describe('ComplexTable component', () => {
  const columnsData = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Roles', accessor: 'roles' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Date', accessor: 'date' },
    { Header: 'Projects', accessor: 'projects' }
  ];

  const tableData = [
    { name: 'John Doe', roles: 'Admin', status: 'Approved', date: '2024-05-27', projects: 75 },
    // Add more sample data as needed
  ];

  test('renders ComplexTable component with given data', () => {
    const { getByText, getByRole } = render(
      <ComplexTable columnsData={columnsData} tableData={tableData} />
    );

    // Check if table title is rendered
    expect(getByText('Users')).toBeInTheDocument();

    // Check if table headers are rendered
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Roles')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('Projects')).toBeInTheDocument();

    // You can add more assertions to test additional functionality or data rendering

  });

  test('renders table with correct number of rows', () => {
    const newData = [
      ...tableData,
      { name: 'Jane Smith', roles: 'Member', status: 'Disable', date: '2024-05-28', projects: 50 }
    ];

    const { getAllByRole } = render(
      <ComplexTable columnsData={columnsData} tableData={newData} />
    );

    const rows = getAllByRole('row');
    // First row is header row, so actual rows count should be data count + 1 for header
    expect(rows.length).toBe(newData.length + 1);
  });

  test('renders table with correct columns count', () => {
    const { getAllByRole } = render(
      <ComplexTable columnsData={columnsData} tableData={tableData} />
    );

    const headerRow = getAllByRole('row')[0]; // Header row
    const headerCells = headerRow.querySelectorAll('th');
    expect(headerCells.length).toBe(columnsData.length);
  });
});
