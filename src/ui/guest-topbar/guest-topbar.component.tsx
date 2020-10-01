import { LanguageSelect } from '@ui/language-select/language-select.component';
import { Logo } from '@ui/logo/logo.component';
import React from 'react';
import styled from 'styled-components';

const TopbarContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const GuestTopbar = () => (
  <TopbarContainer>
    <Logo />
    <LanguageSelect />
  </TopbarContainer>
);
