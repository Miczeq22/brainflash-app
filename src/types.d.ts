import 'styled-components';
import { theme } from '@theme/theme-config';
import { Action as BaseAction } from 'react-fetching-library';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type AdditionalProperties = {
  skipAuthorization?: boolean;
};

export type ApiAction<R> = BaseAction<R, AdditionalProperties>;
