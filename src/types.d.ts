import 'styled-components';
import { theme } from '@theme/theme-config';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
