import React from 'react';
import { GetDeckdetailsData } from '@graphql/queries/get-deck-details.query';
import { Ratings } from '@ui/ratings/ratings.component';
import { Button } from 'antd';
import { CalendarTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import {
  ActionsContainer,
  ButtonsContainer,
  Description,
  DescriptionContainer,
  DescriptionTitle,
  StyledContainer,
  StyledHeader,
  StyledImage,
  StyledTitle,
} from './deck-details-container.styles';

interface DeckDetailsContainerProps extends GetDeckdetailsData {}

export const DeckDetailsContainer = ({
  name,
  description,
  rating,
  numberOfRatings,
  imageUrl,
}: DeckDetailsContainerProps) => (
  <StyledContainer>
    <StyledHeader>
      <StyledImage imageUrl={imageUrl} />
      <ActionsContainer>
        <StyledTitle>{name}</StyledTitle>
        <Ratings ratings={rating} numberOfRatings={numberOfRatings} />
        <ButtonsContainer>
          <Button type="primary" icon={<CheckCircleTwoTone />}>
            Enroll Now!
          </Button>
          <Button icon={<CalendarTwoTone />}>Schedule for later</Button>
        </ButtonsContainer>
      </ActionsContainer>
    </StyledHeader>
    <DescriptionContainer>
      <DescriptionTitle>Description</DescriptionTitle>
      <Description>{description}</Description>
    </DescriptionContainer>
  </StyledContainer>
);
