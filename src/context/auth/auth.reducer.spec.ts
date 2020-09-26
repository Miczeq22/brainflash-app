import { logout, registerUser, setTokens } from './auth.action-creators';
import { initialAuthState } from './auth.context';
import { authReducer } from './auth.reducer';

describe('Auth reducer', () => {
  test('handles SET_TOKENS action', () => {
    expect(authReducer(initialAuthState, setTokens('#access-token', '#refresh-token'))).toEqual({
      ...initialAuthState,
      accessToken: '#access-token',
      refreshToken: '#refresh-token',
      isAuthorized: true,
    });
  });

  test('handles REGISTERED_SUCCESSFULLY action', () => {
    expect(authReducer(initialAuthState, registerUser())).toEqual({
      ...initialAuthState,
      isRegisteredSuccessfully: true,
    });
  });

  test('handles CLEAR_TOKENS action', () => {
    expect(authReducer(initialAuthState, logout())).toEqual({
      ...initialAuthState,
      isAuthorized: false,
    });
  });
});
