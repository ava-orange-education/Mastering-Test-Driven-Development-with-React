import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from './useFetch';

describe('useFetch', () => {
  it('should fetch data and update the state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://api.example.com/data')
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(null);
  });
});
