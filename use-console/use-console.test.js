import { renderHook, act } from '@testing-library/react-hooks'
import { useConsole } from './use-console'

test('should log in the given context', () => {

  const context = 'Logger';

  const { result } = renderHook(() => useConsole({ context }));

  act(() => {
    result.current.log('Hello Logging');
  });

  expect(result.current.loggedValues.length).toBe(1);
  expect(result.current.loggedValues[0]).toBe('Logger: Hello Logging');
  
});