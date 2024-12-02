import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProjectForm from './ProjectForm';

test('Project Form Renders Correctly', () => {
  render(<ProjectForm />);

  const projectNameInput = screen.getByPlaceholderText('Project Name');
  const projectDescriptionInput = screen.getByPlaceholderText('Project Description');
  const createButton = screen.getByText('Create Project');

  expect(projectNameInput).toBeInTheDocument();
  expect(projectDescriptionInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
});

test('Input Validation: Empty Project Name', () => {
  const { getByText } = render(<ProjectForm />);

  const createButton = screen.getByRole('button', { name: 'Create Project' });

  // Click the "Create Project" button without entering a project name
  fireEvent.click(createButton);

  // Ensure that an error message or validation feedback is displayed
  const validationError = screen.getByText('Please provide a project name.');
  expect(validationError).toBeInTheDocument();
});

test('Submit Action: Project Creation', () => {
  render(<ProjectForm />);

  const projectNameInput = screen.getByPlaceholderText('Project Name');
  const projectDescriptionInput = screen.getByPlaceholderText('Project Description');
  const createButton = screen.getByRole('button', { name: 'Create Project' });

  // Simulate user input
  fireEvent.change(projectNameInput, { target: { value: 'New Project' } });
  fireEvent.change(projectDescriptionInput, { target: { value: 'This is a new project' } });

  // Click the "Create Project" button
  fireEvent.click(createButton);

  // We can add expectations here to confirm the project creation logic.
  // For example, we might check if the component sends a request to create the project.
});


