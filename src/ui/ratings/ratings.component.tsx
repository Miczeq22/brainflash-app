/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ReactComponent as StarIcon } from '@assets/star.svg';
import {
  NumberOfRatings,
  Rating,
  StyledContainer,
  StyledList,
  StyledListItem,
} from './ratings.styles';

interface RatingsProps {
  ratings: number;
  numberOfRatings: number;
}

export const Ratings = ({ numberOfRatings, ratings }: RatingsProps) => (
  <StyledContainer className="ratings">
    <StyledList>
      {[...Array(5)].map((_, index) => (
        <StyledListItem key={`star-${index}`} active={index <= Math.round(ratings - 1)}>
          <StarIcon />
        </StyledListItem>
      ))}
    </StyledList>
    <Rating>{ratings.toFixed(2)}</Rating>
    <NumberOfRatings>
      {numberOfRatings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ratings
    </NumberOfRatings>
  </StyledContainer>
);
