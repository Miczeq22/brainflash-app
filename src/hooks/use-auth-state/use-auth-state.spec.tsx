import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useAuthState } from './use-auth-state';
import { AuthContext, initialAuthState } from '@context/auth/auth.context';

describe('useAuthState hook', () => {
  const dispatch = jest.fn();

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthContext.Provider value={{ dispatch, state: initialAuthState }}>
      {children}
    </AuthContext.Provider>
  );

  test('should return context', () => {
    const { result } = renderHook(() => useAuthState(), {
      wrapper,
    });

    expect(result.current).toEqual({
      state: initialAuthState,
      dispatch,
    });
  });

  test('should throw an error when hook is used outside AuthContext Provider', () => {
    const { result } = renderHook(() => useAuthState());

    expect(result.error).toEqual(Error('useAuthState must be used within an AuthProvider'));
  });
});
