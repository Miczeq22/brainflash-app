import React from 'react';
import { StyledContainer, StyledImage, StyledText } from './no-deck-selected.styles';
import DecisionIcon from '@assets/decision.svg';

export const NoDeckSelected = () => (
  <StyledContainer>
    <StyledImage alt="No deck selected" src={DecisionIcon} />
    <StyledText>Select deck from the list to see it&apos;s details.</StyledText>
  </StyledContainer>
);
