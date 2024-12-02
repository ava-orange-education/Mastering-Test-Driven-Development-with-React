import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('LoginForm component handles form submission correctly', () => {
  const handleSubmit = jest.fn();

  const { getByPlaceholderText, getByText } = render(<LoginForm onSubmit={handleSubmit} />);
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const submitButton = getByText('Login');

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({ username: 'testuser', password: 'testpassword' });
});
