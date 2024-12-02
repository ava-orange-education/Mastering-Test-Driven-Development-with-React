import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProjectPermissions from './ProjectPermissions';

test('Project Permissions Renders Correctly', () => {
  const project = { id: 1, name: 'Sample Project' };
  const onPermissionChange = jest.fn();
  render(<ProjectPermissions project={project} onPermissionChange={onPermissionChange} />);

  const heading = screen.getByText('Project Permissions');
  const projectText = screen.getByText(`Manage permissions for ${project.name}`);
  const saveButton = screen.getByText('Save Permissions');

  expect(heading).toBeInTheDocument();
  expect(projectText).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
});

test('Permission Logic Works Correctly', () => {
  const project = { id: 1, name: 'Sample Project' };
  const onPermissionChange = jest.fn(); // Mock the permission change function
  render(<ProjectPermissions project={project} onPermissionChange={onPermissionChange} />);

  const saveButton = screen.getByText('Save Permissions'); // Find the "Save Permissions" button

  // Trigger the permission change by clicking the "Save Permissions" button
  fireEvent.click(saveButton);

  // Check if the onPermissionChange function was called with the correct parameters
  expect(onPermissionChange).toHaveBeenCalledWith(project.id, { read: true }); // Replace { read: true } with our expected permission changes
});
