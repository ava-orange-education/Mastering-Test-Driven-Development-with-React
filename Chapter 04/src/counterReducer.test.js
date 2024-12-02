import counterReducer from './counterReducer';

describe('counterReducer', () => {
  it('should handle INCREMENT_COUNTER action', () => {
    const initialState = { count: 0 };
    const action = { type: 'INCREMENT_COUNTER' };
    const nextState = counterReducer(initialState, action);
    expect(nextState).toEqual({ count: 1 });
  });

  it('should handle DECREMENT_COUNTER action', () => {
    const initialState = { count: 5 };
    const action = { type: 'DECREMENT_COUNTER' };
    const nextState = counterReducer(initialState, action);
    expect(nextState).toEqual({ count: 4 });
  });

  it('should return the current state for unknown actions', () => {
    const initialState = { count: 10 };
    const action = { type: 'UNKNOWN_ACTION' };
    const nextState = counterReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });
});
