import React from 'react';
import CreateIcon from '@assets/create-deck.svg';
import { Button } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { StyledContainer, StyledIcon, StyledText } from './no-decks.styles';
import { Link } from 'react-router-dom';

export const NoDecks = () => (
  <StyledContainer>
    <StyledIcon alt="Create deck" src={CreateIcon} />
    <StyledText>There are no decks yet.</StyledText>
    <Link to="/deck-creator">
      <Button icon={<PlusCircleTwoTone />}>Create one!</Button>
    </Link>
  </StyledContainer>
);
