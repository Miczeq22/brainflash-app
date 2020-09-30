/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StarIcon } from '@assets/star.svg';

interface StyledListItemProps {
  active?: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;

  & > li:last-child {
    margin-right: 0;
  }
`;

const StyledListItem = styled.li<StyledListItemProps>`
  margin-right: 10px;
  max-width: 35px;
  fill: ${({ active = false }) => (active ? '#FDCE30' : '#B5B3B0')};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const Rating = styled.span`
  font-size: 28px;
  font-weight: 700;
  margin: 0 10px;
`;

const NumberOfRatings = styled.span`
  font-size: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.fontGray};
`;

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
