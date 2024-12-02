import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProjectList from './ProjectList';
import { getProjects } from './api'; // Import project service
jest.mock('./api');


test('Project List Renders Correctly', () => {
  render(<ProjectList />);

  const heading = screen.getByText('Projects');

  expect(heading).toBeInTheDocument();
});

test('Project List Fetches and Displays Projects', async () => {
  const mockProjects = [
    { id: 1, name: 'Project 1', status: 'Active' },
    { id: 2, name: 'Project 2', status: 'Inactive' },
  ];

  // Mock the getProjects function to return a list of projects
  getProjects.mockResolvedValue(mockProjects);

  // Render the ProjectList component
  render(<ProjectList />);

  // Wait for the component to fetch and display projects
  await waitFor(() => {
    const project1 = screen.getByText('Project 1 - Active');

    // Assert that the project list is displayed with correct data
    expect(project1).toBeInTheDocument();
  });
});

test('Project List Handles Data Fetching Error', async () => {
  // Mock the getProjects function to simulate a data fetching error
  getProjects.mockRejectedValue(new Error('Failed to fetch projects'));

  // Render the ProjectList component
  render(<ProjectList />);

  // Wait for the component to handle the data fetching error
  await waitFor(() => {
    const errorMessage = screen.getByText('Failed to fetch projects');

    // Assert that an error message is displayed
    expect(errorMessage).toBeInTheDocument();
  });
});

test('Project List Displays Projects Based on Mock Data', () => {
  // Create mock project data
  const mockProjects = [
    { id: 1, name: 'Project A', status: 'Active' },
    { id: 2, name: 'Project B', status: 'Inactive' },
    { id: 3, name: 'Project C', status: 'Active' },
  ];

  // Render the ProjectList component with the mock data
  render(<ProjectList projects={mockProjects} />);

  // Assert that project names and statuses are displayed correctly
  const projectA = screen.getByText('Project A - Active');
  const projectB = screen.getByText('Project B - Inactive');
  const projectC = screen.getByText('Project C - Active');

  expect(projectA).toBeInTheDocument();
  expect(projectB).toBeInTheDocument();
  expect(projectC).toBeInTheDocument();
});
