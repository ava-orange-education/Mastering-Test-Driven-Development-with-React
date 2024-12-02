import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import SignIn from './SignIn';

// Mocking a function to simulate a success API call
export const mockSignInAPI = jest.fn(() => Promise.resolve({ success: true }));
// Mocking a function to simulate a failed API call
export const mockFailedSignInAPI = jest.fn(() => Promise.reject(new Error('Invalid credentials')));

test('renders the Sign-In component', () => {
  const { getByText, getByLabelText } = render(<SignIn />);

  // Ensure the Sign-In component renders successfully
  expect(getByText('Sign In')).toBeInTheDocument();

  // Find input fields by label text
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');

  // Ensure input fields are present
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('validates user input on Sign-In', () => {
  const { getByLabelText, getByText } = render(<SignIn />);
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const signInButton = getByText('Sign In');

  // Provide invalid input (empty fields)
  fireEvent.click(signInButton);

  // Ensure error messages are displayed
  expect(getByText('Email is required.')).toBeInTheDocument();
  expect(getByText('Password is required.')).toBeInTheDocument();

  // Provide valid input
  fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Clear error messages
  // expect(queryByText('Email is required.')).toBeNull();
  // expect(queryByText('Password is required.')).toBeNull();
});


test('handles successful sign-in', async () => {
  const { getByLabelText, getByText } = render(<SignIn />);
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const signInButton = getByText('Sign In');

  // Provide valid input
  fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Mock the successful API call
  mockSignInAPI.mockClear();
  mockSignInAPI.mockResolvedValueOnce({ success: true });

  // Perform the sign-in action
  fireEvent.click(signInButton);

  // Ensure that the API call was made
  expect(mockSignInAPI).toHaveBeenCalledWith({
    email: 'user@example.com',
    password: 'password123',
  });

  // Wait for the component to update after the successful API call
  await waitFor(() => {
    // Assert that success message or navigation to a new page occurs
    // Replace with actual assertion based on your application behavior
    expect(getByText('Sign-in successful!')).toBeInTheDocument();
  });
});

test('handles failed sign-in', async () => {
  const { getByLabelText, getByText } = render(<SignIn />);
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const signInButton = getByText('Sign In');

  // Provide valid input
  fireEvent.change(emailInput, { target: { value: 'user1@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Mock the failed API call
  mockFailedSignInAPI.mockClear();
  mockFailedSignInAPI.mockRejectedValueOnce(new Error('Invalid credentials'));

  // Perform the sign-in action
  fireEvent.click(signInButton);

  // Ensure that the API call was made
  expect(mockFailedSignInAPI).toHaveBeenCalledWith({
    email: 'user1@example.com',
    password: 'password123',
  });

  // Wait for the component to update after the failed API call
  await waitFor(() => {
    // Assert that error message handling occurs
    // Replace with actual assertion based on your application behavior
    expect(getByText('Invalid credentials. Please try again.')).toBeInTheDocument();
  });
});
