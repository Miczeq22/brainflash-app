import { CheckOutlined, ClockCircleTwoTone } from '@ant-design/icons';
import { Ratings } from '@ui/ratings/ratings.component';
import { Button } from 'antd';
import React from 'react';
import {
  ButtonsContainer,
  DeckDescription,
  DeckTitle,
  RatingsContainer,
  StyledContainer,
  StyledImage,
  StyledLink,
} from './deck-preview.styles';

interface DeckPreviewProps {
  id: string;
  title: string;
  description: string;
  rating: number;
  numberOfRatings: number;
  imageUrl?: string;
}

export const DeckPreview = ({
  id,
  title,
  description,
  rating,
  numberOfRatings,
  imageUrl,
}: DeckPreviewProps) => (
  <StyledContainer>
    <StyledImage imageUrl={imageUrl} />
    <RatingsContainer>
      <Ratings numberOfRatings={numberOfRatings} ratings={rating} />
    </RatingsContainer>
    <DeckTitle>{title}</DeckTitle>
    <DeckDescription>{description}</DeckDescription>
    <StyledLink to={`/deck-details/${id}`}>View deck details.</StyledLink>
    <ButtonsContainer>
      <Button type="primary" htmlType="button" icon={<CheckOutlined />}>
        Enroll now!
      </Button>
      <Button htmlType="button" icon={<ClockCircleTwoTone />}>
        Schedule for later
      </Button>
    </ButtonsContainer>
  </StyledContainer>
);
