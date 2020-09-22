export interface AuthState {
  accessToken: string;
  refreshToken: string;
}

export interface AuthAction {
  type: string;
  accessToken?: string;
  refreshToken?: string;
}

export const SET_TOKENS = 'auth/set-tokens';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SET_TOKENS:
      return {
        ...state,
        accessToken: action.accessToken as string,
        refreshToken: action.refreshToken as string,
      };

    default:
      return state;
  }
};
