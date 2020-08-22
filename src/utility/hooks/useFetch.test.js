import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

function fakeEnpoint() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Suscces');
    }, 500);
  });
}
jest.useFakeTimers();
describe('Enpoints | search', () => {
  it('useFetch Defined', () => {
    expect(useFetch).toBeDefined();
  });
  it('useFetch ', () => {
    const { result } = renderHook(() => useFetch(fakeEnpoint, {}));
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.response).toEqual({});

    act(() => jest.advanceTimersByTime(310));
  });
});
