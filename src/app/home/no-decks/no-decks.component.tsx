import React from 'react';
import CreateIcon from '@assets/create-deck.svg';
import { Button } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { StyledContainer, StyledIcon, StyledText } from './no-decks.styles';

export const NoDecks = () => (
  <StyledContainer>
    <StyledIcon alt="Create deck" src={CreateIcon} />
    <StyledText>There are no decks yet.</StyledText>
    <Button icon={<PlusCircleTwoTone />}>Create one!</Button>
  </StyledContainer>
);
