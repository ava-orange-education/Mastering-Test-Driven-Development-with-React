import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MembershipManagement from './MembershipManagement';

test('Membership Management Renders Correctly', () => {
  render(<MembershipManagement />);

  const heading = screen.getByText('Membership Management');
  const userSelect = screen.getByTestId('user-select');
  const addButton = screen.getByText('Add User to Project');

  expect(heading).toBeInTheDocument();
  expect(userSelect).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test('checks user addition', () => {
  // Mock user data for testing.
  const mockUsers = [
    { id: 1, name: 'User A', role: 'Developer', permissions: ['Read'] },
    { id: 2, name: 'User B', role: 'Designer', permissions: ['Read', 'Write'] },
    // Add more mock user data as needed.
  ];

  // Render the MembershipManagement component with the mock user data.
  render(<MembershipManagement users={mockUsers} />);

  // Select a user from the dropdown.
  const userSelect = screen.getByTestId('user-select');
  fireEvent.change(userSelect, { target: { value: '2' } });

  // Click the "Add User to Project" button.
  const addButton = screen.getByText('Add User to Project');
  fireEvent.click(addButton);

  // Add assertions to verify the expected behavior.
  // Example: Check if User B was added to the project or displayed in a list.
});
