import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TaskManager } from './index';

// Mock the external components and functions
jest.mock('react-trello', () => ({
  __esModule: true,
  default: ({ data }) => (
    <div data-testid="mock-board">
      {data.lanes.map(lane => (
        <div key={lane.id} data-testid={`lane-${lane.id}`}>
          <h3>{lane.title}</h3>
          {lane.cards.map(card => (
            <div key={card.id} data-testid={`card-${card.id}`}>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}));

jest.mock('./TaskForm', () => ({
  TaskForm: () => <div>Mock New Card Form</div>,
}));

jest.mock('./AddCardLink', () => ({
  AddCardLink: () => <div>Mock Add Card Link</div>,
}));

jest.mock('./CardPopup', () => ({
  CardPopUp: () => <div>Mock Card Popup</div>,
}));

describe('TaskManager Component', () => {
  it('renders without crashing', () => {
    render(<TaskManager />);
    expect(screen.getByText('Main Board')).toBeInTheDocument();
  });

  it('displays the board component', () => {
    render(<TaskManager />);
    expect(screen.getByTestId('mock-board')).toBeInTheDocument();
  });

  it('shows the "Reset Search" button', () => {
    render(<TaskManager />);
    expect(screen.getByText('Reset Search')).toBeInTheDocument();
  });

  it('shows the "Search" button', () => {
    render(<TaskManager />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('shows the "Archived Cards" button', () => {
    render(<TaskManager />);
    expect(screen.getByText('Archived Cards')).toBeInTheDocument();
  });

  it('opens the filter modal when clicking the Search button', async () => {
    render(<TaskManager />);
    fireEvent.click(screen.getByText('Search'));
    await waitFor(() => {
      expect(screen.getByText('Assigned to:')).toBeInTheDocument();
    });
  });

  it('closes the filter modal when clicking Done', async () => {
    render(<TaskManager />);
    fireEvent.click(screen.getByText('Search'));
    await waitFor(() => {
      expect(screen.getByText('Assigned to:')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Done'));
    await waitFor(() => {
      expect(screen.queryByText('Assigned to:')).not.toBeInTheDocument();
    });
  });

  it('renders a task in the Trello lane as expected', async () => {
    render(<TaskManager />);

    // Wait for the board to be rendered
    const board = await screen.findByTestId('mock-board');
    expect(board).toBeInTheDocument();

    // Check if the "Inprogress Task" lane is rendered
    const inProgressLane = await screen.findByTestId('lane-2');
    expect(inProgressLane).toBeInTheDocument();
    expect(inProgressLane).toHaveTextContent('Inprogress Task');

    // Check if the specific task is rendered in the "Inprogress Task" lane
    const taskCard = await screen.findByTestId('card-22');
    expect(taskCard).toBeInTheDocument();
    expect(taskCard).toHaveTextContent('Counter Testing');
    expect(taskCard).toHaveTextContent('This is counter testing by me');
  });

  it('displays correct task information from mock data', async () => {
    render(<TaskManager />);

    // Wait for the board to be rendered
    const board = await screen.findByTestId('mock-board');
    expect(board).toBeInTheDocument();

    // Check "New Task" lane
    const newTaskLane = await screen.findByTestId('lane-1');
    expect(newTaskLane).toBeInTheDocument();
    expect(newTaskLane).toHaveTextContent('New Task');
    expect(screen.queryAllByTestId(/^card-/)).toHaveLength(0);

    // Check "Inprogress Task" lane
    const inProgressLane = await screen.findByTestId('lane-2');
    expect(inProgressLane).toBeInTheDocument();
    expect(inProgressLane).toHaveTextContent('Inprogress Task');
    
    const inProgressCard = await screen.findByTestId('card-22');
    expect(inProgressCard).toBeInTheDocument();
    expect(inProgressCard).toHaveTextContent('Counter Testing');
    expect(inProgressCard).toHaveTextContent('This is counter testing by me');

    // Check "Completed" lane
    const completedLane = await screen.findByTestId('lane-3');
    expect(completedLane).toBeInTheDocument();
    expect(completedLane).toHaveTextContent('Completed');

    const completedCard1 = await screen.findByTestId('card-19');
    expect(completedCard1).toBeInTheDocument();
    expect(completedCard1).toHaveTextContent('Test 2');
    expect(completedCard1).toHaveTextContent('Tes');

    const completedCard2 = await screen.findByTestId('card-20');
    expect(completedCard2).toBeInTheDocument();
    expect(completedCard2).toHaveTextContent('new');
    expect(completedCard2).toHaveTextContent('test');

    // Check "Information Tab" lane
    const infoLane = await screen.findByTestId('lane-16');
    expect(infoLane).toBeInTheDocument();
    expect(infoLane).toHaveTextContent('Information Tab');

    const infoCard = await screen.findByTestId('card-17');
    expect(infoCard).toBeInTheDocument();
    expect(infoCard).toHaveTextContent('Test');
    expect(infoCard).toHaveTextContent('Description');

    // Check "Created by me" lane
    const createdByMeLane = await screen.findByTestId('lane-0');
    expect(createdByMeLane).toBeInTheDocument();
    expect(createdByMeLane).toHaveTextContent('Created by me');

    const createdByMeCards = createdByMeLane.querySelectorAll('[data-testid^="card-"]');
    expect(createdByMeCards).toHaveLength(6);
  });
});
