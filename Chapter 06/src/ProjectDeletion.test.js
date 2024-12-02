import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProjectDeletion from './ProjectDeletion';

test('Project Deletion Renders Correctly', () => {
  const project = { id: 1, name: 'Sample Project' };
  const onDeleteProject = jest.fn();
  render(<ProjectDeletion project={project} onDeleteProject={onDeleteProject} />);

  const heading = screen.getByText('Delete Project');
  const confirmationMessage = screen.getByText(`Are you sure you want to delete ${project.name}?`);
  const deleteButton = screen.getByText('Yes, Delete');

  expect(heading).toBeInTheDocument();
  expect(confirmationMessage).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
});

test('Project Deletion Logic Works', () => {
  // Create a sample project and a mock function to handle project deletion
  const project = { id: 1, name: 'Sample Project' };
  const onDeleteProject = jest.fn();

  // Render the ProjectDeletion component
  const { getByText } = render(<ProjectDeletion project={project} onDeleteProject={onDeleteProject}/>);

  // Find the "Yes, Delete" button and click it
  const deleteButton = screen.getByText('Yes, Delete');
  fireEvent.click(deleteButton);

  // Verify that the onDeleteProject function was called with the correct project ID
  expect(onDeleteProject).toHaveBeenCalledWith(project.id);
});

