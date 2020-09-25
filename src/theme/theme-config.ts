export type FontFamily = 'primary' | 'secondary';

export type DeviceBreakpoint = 'mobile' | 'tablet';

export type Color =
  | 'background'
  | 'primary'
  | 'success'
  | 'error'
  | 'fontPrimary'
  | 'fontGray'
  | 'white'
  | 'gray';

export interface Theme {
  fontFamily: { [key in FontFamily]: string };
  color: { [key in Color]: string };
  deviceBreakpoint: { [key in DeviceBreakpoint]: string };
}

export const theme: Theme = {
  fontFamily: {
    primary: 'Montserrat',
    secondary: 'Raleway',
  },
  color: {
    background: '#F4F7FA',
    primary: '#5F81F4',
    success: '#2cb67d',
    error: '#e53170',
    fontPrimary: '#3D3B3C',
    fontGray: '#B5B3B0',
    white: '#FFFFFF',
    gray: '#F4F7FA',
  },
  deviceBreakpoint: {
    mobile: '768px',
    tablet: '1024px',
  },
};
