/* eslint-disable no-empty */

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

class AuthStorage {
  private accessToken: string | null = null;

  private refreshToken: string | null = null;

  constructor() {
    this.setTokens();
  }

  private setTokens() {
    try {
      this.accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
      this.refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    } catch {
      this.accessToken = null;
      this.refreshToken = null;
    }
  }

  public setAccessToken(accessToken: string | null) {
    this.accessToken = accessToken;

    try {
      if (typeof accessToken === 'string' && accessToken.trim()) {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      } else {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
      }
    } catch {}
  }

  public setRefreshToken(refreshToken: string | null) {
    this.refreshToken = refreshToken;

    try {
      if (typeof refreshToken === 'string' && refreshToken.trim()) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
      } else {
        localStorage.removeItem(REFRESH_TOKEN_KEY);
      }
    } catch {}
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public getRefreshToken() {
    return this.refreshToken;
  }
}

export const authStorage = new AuthStorage();
