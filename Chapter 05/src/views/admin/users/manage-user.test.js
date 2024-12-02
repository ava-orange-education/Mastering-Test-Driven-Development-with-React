import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ManageUser from './ManageUser';
export const handleSaveEdits = jest.fn();
describe('ManageUser Component', () => {
  test('renders the screen title', () => {
    const { getByText } = render(<ManageUser />);
    expect(getByText('Manage User')).toBeInTheDocument();
  });

  test('updates user data when input fields change', () => {
    const { getByPlaceholderText } = render(<ManageUser />);
    const fullNameInput = getByPlaceholderText('Full Name');

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });

    expect(fullNameInput.value).toBe('John Doe');
  });

  test('calls handleSaveEdits function when "Save Edits" button is clicked', () => {
    const { getByText } = render(<ManageUser />);
    const saveButton = getByText('Save Edits');

    fireEvent.click(saveButton);

    expect(handleSaveEdits).toHaveBeenCalled();
  });
});
