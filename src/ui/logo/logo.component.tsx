import React from 'react';
import { LogoText, StyledIcon, StyledLink } from './logo.styles';

export const Logo = () => (
  <StyledLink to="/" className="logo">
    <StyledIcon />
    <LogoText>Brainflash</LogoText>
  </StyledLink>
);
