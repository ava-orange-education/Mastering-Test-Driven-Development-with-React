import React from 'react';
import { render, waitFor } from '@testing-library/react';
import DataComponent from './DataComponent';
import fetchData from './api'; // Import the fetchData function

jest.mock('./api');

test('renders data when fetched successfully', async () => {
  // Mock fetchData function to return a sample data
  fetchData.mockResolvedValue('Sample Data');

  const { getByText } = render(<DataComponent />);

  // Wait for the component to render with sample data
  await waitFor(() => {
    const dataElement = getByText('Data: Sample Data');
    expect(dataElement).toBeInTheDocument();
  });
});

test('renders loading message during data fetch', async () => {
  // Mock fetchData function to simulate a loading state
  fetchData.mockImplementation(() => new Promise(() => { }));

  const { getByText } = render(<DataComponent />);

  // Check if the loading message is rendered
  const loadingElement = getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();
});
