import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import SignUp from './SignUp';

// Mocking a function to simulate a successful API call
export const mockSignUpAPI = jest.fn(() => Promise.resolve({ success: true }));

// Mocking a function to simulate a failed API call
export const mockFailedSignUpAPI = jest.fn(() => Promise.reject(new Error('User already exists')));

test('renders the Sign-Up component', () => {
  const { getByText, getByLabelText } = render(<SignUp />);

  // Ensure the Sign-Up component renders successfully
  expect(getByText('Sign Up')).toBeInTheDocument();

  // Find input fields by label text
  const fullNameInput = getByLabelText('Full Name');
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const confirmPasswordInput = getByLabelText('Confirm Password');
  const orgCodeInput = getByLabelText('Organization Code');
  const roleSelect = getByText('Role');

  // Ensure input fields and role selection are present
  expect(fullNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(confirmPasswordInput).toBeInTheDocument();
  expect(orgCodeInput).toBeInTheDocument();
  expect(roleSelect).toBeInTheDocument();
});

test('handles successful sign-up', async () => {
  const { getByLabelText, getByText } = render(<SignUp />);
  const fullNameInput = getByLabelText('Full Name');
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const confirmPasswordInput = getByLabelText('Confirm Password');
  const orgCodeInput = getByLabelText('Organization Code');
  const roleSelect = getByText('Role');
  const adminCheckbox = getByText('Admin');
  const signUpButton = getByText('Sign Up');

  // Provide valid input
  fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  fireEvent.change(orgCodeInput, { target: { value: 'org123' } });
  expect(roleSelect).toBeInTheDocument();
  fireEvent.click(adminCheckbox);

  // Mock the successful API call
  mockSignUpAPI.mockClear();
  mockSignUpAPI.mockResolvedValueOnce({ success: true });

  // Perform the sign-up action
  fireEvent.click(signUpButton);

  // Ensure that the API call was made
  expect(mockSignUpAPI).toHaveBeenCalledWith({
    fullName: 'John Doe',
    email: 'user@example.com',
    password: 'password123',
    orgCode: 'org123',
    role: 'user',
  });

  // Wait for the component to update after the successful API call
  await waitFor(() => {
    // Assert that success message or navigation to a new page occurs
    // Replace with actual assertion based on your application behavior
    expect(getByText('Sign-up successful!')).toBeInTheDocument();
  });
});

test('handles failed sign-up', async () => {
  const { getByLabelText, getByText } = render(<SignUp />);
  const fullNameInput = getByLabelText('Full Name');
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const confirmPasswordInput = getByLabelText('Confirm Password');
  const orgCodeInput = getByLabelText('Organization Code');
  const roleSelect = getByText('Role');
  const adminCheckbox = getByText('Admin');
  const signUpButton = getByText('Sign Up');

  // Provide valid input
  fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'user1@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  fireEvent.change(orgCodeInput, { target: { value: 'org123' } });
  expect(roleSelect).toBeInTheDocument();
  fireEvent.click(adminCheckbox);

  // Mock the failed API call
  mockFailedSignUpAPI.mockClear();
  mockFailedSignUpAPI.mockRejectedValueOnce(new Error('User already exists'));

  // Perform the sign-up action
  fireEvent.click(signUpButton);

  // Ensure that the API call was made
  expect(mockFailedSignUpAPI).toHaveBeenCalledWith({
    fullName: 'John Doe',
    email: 'user1@example.com',
    password: 'password123',
    orgCode: 'org123',
    role: 'user',
  });

  // Wait for the component to update after the failed API call
  await waitFor(() => {
    // Assert that error message handling occurs
    // Replace with actual assertion based on your application behavior
    expect(getByText('User already exists. Please use a different email.')).toBeInTheDocument();
  });
});
