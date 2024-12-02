import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectComments from './ProjectComments';

test('Project Comments Renders and Manages Comments', () => {
  const project = { name: 'Sample Project' };
  render(<ProjectComments project={project} />);

  const heading = screen.getByText('Project Comments');
  const addCommentTextarea = screen.getByPlaceholderText('Add a comment');
  const addCommentButton = screen.getByRole('button', { name: 'Add Comment' });

  expect(heading).toBeInTheDocument();
  expect(addCommentTextarea).toBeInTheDocument();
  expect(addCommentButton).toBeInTheDocument();

  fireEvent.change(addCommentTextarea, { target: { value: 'A new comment' } });
  fireEvent.click(addCommentButton);

  const addedComment = screen.getByText('A new comment');
  expect(addedComment).toBeInTheDocument();
});

test('Adding Multiple Comments', () => {
  const project = { name: 'Sample Project' };
  render(<ProjectComments project={project} />);

  // Adding the first comment
  const addCommentTextarea = screen.getByPlaceholderText('Add a comment');
  const addCommentButton = screen.getByRole('button', { name: 'Add Comment' });
  fireEvent.change(addCommentTextarea, { target: { value: 'First comment' } });
  fireEvent.click(addCommentButton);

  // Adding the second comment
  fireEvent.change(addCommentTextarea, { target: { value: 'Second comment' } });
  fireEvent.click(addCommentButton);

  // Verifying that both comments are displayed
  const firstComment = screen.getByText('First comment');
  const secondComment = screen.getByText('Second comment');
  expect(firstComment).toBeInTheDocument();
  expect(secondComment).toBeInTheDocument();
});

test('Comment Timestamps', () => {
  const project = { name: 'Sample Project' };
  render(<ProjectComments project={project} />);

  // Adding a comment
  const addCommentTextarea = screen.getByPlaceholderText('Add a comment');
  const addCommentButton = screen.getByRole('button', { name: 'Add Comment' });
  fireEvent.change(addCommentTextarea, { target: { value: 'A new comment' } });
  fireEvent.click(addCommentButton);

  // Verifying that the timestamp is displayed and follows a valid format
  const timestamp = screen.getByTestId('comment-timestamp');
  const timestampText = timestamp.textContent;
  // Perform a regex or format validation on timestampText
  // Ensure it reflects the time of comment creation accurately
  // Example: expect(timestampText).toMatch(/valid_timestamp_format/);
});

test('Editing Comments', () => {
  const project = { name: 'Sample Project' };
  render(<ProjectComments project={project} />);

  // Adding a comment
  const addCommentTextarea = screen.getByPlaceholderText('Add a comment');
  const addCommentButton = screen.getByRole('button', { name: 'Add Comment' });
  fireEvent.change(addCommentTextarea, { target: { value: 'Original comment' } });
  fireEvent.click(addCommentButton);

  // Editing the comment
  const editCommentButton = screen.getByRole('button', { name: 'Edit Comment' });
  fireEvent.click(editCommentButton);
  const editedCommentTextarea = screen.getByPlaceholderText('Edit your comment');
  fireEvent.change(editedCommentTextarea, { target: { value: 'Edited comment' } });
  fireEvent.click(editCommentButton);

  // Verifying that the edited comment is displayed
  const editedComment = screen.getByText('Edited comment');
  expect(editedComment).toBeInTheDocument();
});

test('Comment Deletion', () => {
  const project = { name: 'Sample Project' };
  render(<ProjectComments project={project} />);

  // Adding a comment
  const addCommentTextarea = screen.getByPlaceholderText('Add a comment');
  const addCommentButton = screen.getByRole('button', { name: 'Add Comment' });
  fireEvent.change(addCommentTextarea, { target: { value: 'Comment to delete' } });
  fireEvent.click(addCommentButton);

  // Deleting the comment
  const deleteCommentButton = screen.getByRole('button', { name: 'Delete Comment' });
  fireEvent.click(deleteCommentButton);

  // Verifying that the comment is removed from the display
  const deletedComment = screen.queryByText('Comment to delete');
  expect(deletedComment).toBeNull();
});


