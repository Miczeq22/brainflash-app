export interface AuthState {
  accessToken: string;
  refreshToken: string;
  isAuthorized: boolean;
  isRegisteredSuccessfully: boolean;
}

export interface AuthAction {
  type: string;
  accessToken?: string;
  refreshToken?: string;
}

export const SET_TOKENS = 'auth/set-tokens';
export const REGISTERED_SUCCESSFULLY = 'auth/registered-successfully';
export const CLEAR_TOKENS = 'auth/clear-tokens';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SET_TOKENS:
      return {
        ...state,
        accessToken: action.accessToken as string,
        refreshToken: action.refreshToken as string,
        isAuthorized: true,
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
