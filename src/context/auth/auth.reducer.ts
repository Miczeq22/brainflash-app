export interface AuthState {
  accessToken: string;
  refreshToken: string;
  isAuthorized: boolean;
  isRegisteredSuccessfully: boolean;
  username: string;
  userId: string;
}

export interface AuthAction {
  type: string;
  accessToken?: string;
  refreshToken?: string;
  userId?: string;
  username?: string;
}

export const SET_TOKENS = 'auth/set-tokens';
export const REGISTERED_SUCCESSFULLY = 'auth/registered-successfully';
export const CLEAR_TOKENS = 'auth/clear-tokens';
export const SET_USER_DATA = 'auth/set-user-data';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SET_TOKENS:
      return {
        ...state,
        accessToken: action.accessToken as string,
        refreshToken: action.refreshToken as string,
        isAuthorized: true,
      };

    case SET_USER_DATA:
      return {
        ...state,
        username: action.username as string,
        userId: action.userId as string,
      };

    case REGISTERED_SUCCESSFULLY:
      return {
        ...state,
        isRegisteredSuccessfully: true,
      };

    case CLEAR_TOKENS:
      return {
        ...state,
        isAuthorized: false,
        accessToken: '',
        refreshToken: '',
      };

    default:
      return state;
  }
};
