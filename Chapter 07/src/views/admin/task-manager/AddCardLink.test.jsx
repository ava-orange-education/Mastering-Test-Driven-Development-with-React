import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { AddCardLink } from './AddCardLink';

describe('AddCardLink', () => {
  it('renders the "Add Task" link when laneId is not 0', () => {
    const mockOnClick = jest.fn();
    render(<AddCardLink laneId={1} onClick={mockOnClick} />);

    const addTaskLink = screen.getByText('Add Task');
    expect(addTaskLink).toBeInTheDocument();
    expect(addTaskLink.tagName).toBe('A');
  });

  it('does not render anything when laneId is 0', () => {
    render(<AddCardLink laneId={0} onClick={() => { }} />);

    const addTaskLink = screen.queryByText('Add Task');
    expect(addTaskLink).not.toBeInTheDocument();
  });

  it('calls the onClick function when the link is clicked', () => {
    const mockOnClick = jest.fn();
    render(<AddCardLink laneId={1} onClick={mockOnClick} />);

    const addTaskLink = screen.getByText('Add Task');
    fireEvent.click(addTaskLink);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});