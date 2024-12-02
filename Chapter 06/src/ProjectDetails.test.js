import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProjectDetails from './ProjectDetails';

test('Project Details Renders Correctly', () => {
  const project = { name: 'Sample Project', description: 'This is a sample project' };
  render(<ProjectDetails project={project} />);

  const heading = screen.getByText('Project Details');
  const projectName = screen.getByText(`Project Name: ${project.name}`);
  const projectDescription = screen.getByText(`Project Description: ${project.description}`);

  expect(heading).toBeInTheDocument();
  expect(projectName).toBeInTheDocument();
  expect(projectDescription).toBeInTheDocument();
});

test('Project Details Renders Correctly with Empty Project', () => {
  // Create an empty project with no name or description
  const project = { name: '', description: '' };
  render(<ProjectDetails project={project} />);

  const heading = screen.getByText('Project Details');
  const projectName = screen.queryByText('Project Name:');
  const projectDescription = screen.queryByText('Project Description:');

  // Ensure the component is rendered and displays empty values for name and description
  expect(heading).toBeInTheDocument();
  expect(projectName).toBeInTheDocument();
  expect(projectName).toHaveTextContent('Project Name:');
  expect(projectDescription).toBeInTheDocument();
  expect(projectDescription).toHaveTextContent('Project Description:');
});


test('Project Details Renders Additional Details', () => {
  // Create a project with additional details
  const project = { name: 'Sample Project', description: 'This is a sample project', status: 'In Progress' };
  const { getByText } = render(<ProjectDetails project={project} />);

  const heading = screen.getByText('Project Details');
  const projectName = screen.getByText('Project Name: Sample Project');
  const projectDescription = screen.getByText('Project Description: This is a sample project');
  const projectStatus = screen.getByText('Status: In Progress');

  // Ensure the component correctly displays the project name, description, and additional status
  expect(heading).toBeInTheDocument();
  expect(projectName).toBeInTheDocument();
  expect(projectDescription).toBeInTheDocument();
  expect(projectStatus).toBeInTheDocument();
});
