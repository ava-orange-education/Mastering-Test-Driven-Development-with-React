import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectSearch from './ProjectSearch';

test('Project Search Renders Correctly', () => {
  const onSearch = jest.fn();
  render(<ProjectSearch onSearch={onSearch} />);

  const heading = screen.getByText('Search Projects');
  const searchInput = screen.getByPlaceholderText('Search Term');
  const searchButton = screen.getByText('Search');

  expect(heading).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('Search Logic Works Correctly', () => {
  const onSearch = jest.fn(); // Mock the search function
  render(<ProjectSearch onSearch={onSearch} />);

  const searchInput = screen.getByPlaceholderText('Search Term'); // Find the search input field
  const searchButton = screen.getByText('Search'); // Find the search button

  // Simulate user input by changing the value of the search input field
  fireEvent.change(searchInput, { target: { value: 'Project ABC' } });

  // Trigger the search by clicking the search button
  fireEvent.click(searchButton);

  // Check if the search function was called with the correct search term
  expect(onSearch).toHaveBeenCalledWith('Project ABC');
});

test('Search Scenarios: Empty Term, Successful Search', () => {
  const onSearch = jest.fn(); // Mock the search function
  render(<ProjectSearch onSearch={onSearch} />);

  const searchInput = screen.getByPlaceholderText('Search Term'); // Find the search input field
  const searchButton = screen.getByText('Search'); // Find the search button

  // Test 1: Empty Search Term
  fireEvent.change(searchInput, { target: { value: '' } }); // Empty search term
  fireEvent.click(searchButton);
  expect(onSearch).toHaveBeenCalled(); // Ensure that the search function is called with an empty term

  // Test 2: Successful Search
  fireEvent.change(searchInput, { target: { value: 'Project XYZ' } }); // Valid search term
  fireEvent.click(searchButton);
  expect(onSearch).toHaveBeenCalledWith('Project XYZ'); // Check if the search function was called with the correct search term


});

