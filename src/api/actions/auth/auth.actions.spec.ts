import { loginAction, registerAction } from './auth.actions';

describe('Auth actions', () => {
  let originalEnv: any;

  beforeAll(() => {
    originalEnv = process.env;
  });

  beforeEach(() => {
    process.env.REACT_APP_API_ENDPOINT = 'https://api.com';
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test('should return correct data for login action', () => {
    const payload = {
      email: '#email',
      password: '#password',
    };

    expect(loginAction(payload)).toEqual({
      method: 'POST',
      endpoint: `${process.env.REACT_APP_API_ENDPOINT}/user-access/login`,
      body: payload,
      config: {
        skipAuthorization: true,
      },
    });
  });

  test('should return correct data for register action', () => {
    const payload = {
      email: '#email',
      password: '#password',
      username: '#username',
    };

    expect(registerAction(payload)).toEqual({
      method: 'POST',
      endpoint: `${process.env.REACT_APP_API_ENDPOINT}/register`,
      body: payload,
      config: {
        skipAuthorization: true,
      },
    });
  });
});
