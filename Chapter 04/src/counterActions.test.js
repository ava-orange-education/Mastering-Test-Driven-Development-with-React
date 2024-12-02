import { incrementCounter } from './counterActions';

describe('incrementCounter', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = { type: 'INCREMENT_COUNTER' };
    expect(incrementCounter()).toEqual(expectedAction);
  });
});
