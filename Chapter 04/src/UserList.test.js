import React from 'react';
import { render, waitFor } from '@testing-library/react';
import UserList from './UserList';

test('UserList component renders loading state initially', () => {
  const { getByText } = render(<UserList />);
  const loadingElement = getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();
});

test('UserList component renders error message when API request fails', async () => {
  // Mock the fetch function to simulate a failed API request
  jest.spyOn(global, 'fetch').mockRejectedValue(new Error('API request failed'));

  const { getByText } = render(<UserList />);
  await waitFor(() => {
    const errorElement = getByText('Error: API request failed');
    expect(errorElement).toBeInTheDocument();
  });

  // Restore the original fetch function
  global.fetch.mockRestore();
});

test('UserList component renders the list of users', async () => {
  // Mock the fetch function to return a specific response
  const mockUsers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockUsers),
  });

  const { getByText } = render(<UserList />);
  await waitFor(() => {
    const user1Element = getByText('John Doe');
    const user2Element = getByText('Jane Smith');
    expect(user1Element).toBeInTheDocument();
    expect(user2Element).toBeInTheDocument();
  });

  // Restore the original fetch function
  global.fetch.mockRestore();
});
