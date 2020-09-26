import { logout, registerUser, setTokens } from './auth.action-creators';
import { CLEAR_TOKENS, REGISTERED_SUCCESSFULLY, SET_TOKENS } from './auth.reducer';

describe('Auth action creators', () => {
  test('creates setTokens action', () => {
    const payload = {
      accessToken: '#access-token',
      refreshToken: '#refresh-token',
    };

    expect(setTokens(payload.accessToken, payload.refreshToken)).toEqual({
      type: SET_TOKENS,
      ...payload,
    });
  });

  test('creates registerUser action', () => {
    expect(registerUser()).toEqual({
      type: REGISTERED_SUCCESSFULLY,
    });
  });

  test('creates logout action', () => {
    expect(logout()).toEqual({
      type: CLEAR_TOKENS,
    });
  });
});
