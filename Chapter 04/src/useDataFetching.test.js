import { renderHook, act } from '@testing-library/react-hooks';
import useDataFetching from './useDataFetching';

describe('useDataFetching', () => {
  it('should fetch data and update the state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDataFetching());

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(null);
  });
});