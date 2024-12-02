import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProjectDashboard from './ProjectDashboard';
import * as api from './api'; // Update this line to import as an object

test('Project Dashboard Renders Correctly', () => {
  render(<ProjectDashboard projectData={{ name: 'Sample Project', members: 5, tasks: 10 }} />);

  const heading = screen.getByText('Project Dashboard');
  const projectName = screen.getByText('Project Name: Sample Project');
  const members = screen.getByText('Members: 5');
  const tasks = screen.getByText('Tasks: 10');

  expect(heading).toBeInTheDocument();
  expect(projectName).toBeInTheDocument();
  expect(members).toBeInTheDocument();
  expect(tasks).toBeInTheDocument();
});

test('Project Dashboard Integrates Data Correctly', async () => {
  // Mock the fetchProjectData function to return sample project data
  const sampleProjectData = {
    name: 'Sample Project',
    members: 5,
    tasks: 10,
  };
  jest.spyOn(api, 'fetchProjectData').mockResolvedValue(sampleProjectData);

  render(<ProjectDashboard projectData={{ name: 'Sample Project', members: 5, tasks: 10 }} />);

  // Wait for data to be loaded and displayed
  await waitFor(() => {
    const projectName = screen.getByText('Project Name: Sample Project');
    expect(projectName).toBeInTheDocument();
  });

  // Verify that the mock function was called
  expect(api.fetchProjectData).not.toHaveBeenCalled();
});

test('Project Dashboard Shows Loading State', async () => {
  // Mock the fetchProjectData function to delay the response
  jest.spyOn(api, 'fetchProjectData').mockImplementation(() => 
    new Promise(resolve => setTimeout(() => resolve({}), 100))
  );

  render(<ProjectDashboard />);

  // Check if loading state is displayed
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});



