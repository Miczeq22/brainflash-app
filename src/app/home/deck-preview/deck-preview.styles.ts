import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyledImageProps {
  imageUrl?: string;
}

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.div<StyledImageProps>`
  height: 400px;
  ${({ imageUrl }) => imageUrl && `background-image: url('${imageUrl}');`};
  background-position: center;
  background-size: cover;
  background-color: rgba(95, 129, 244, 0.3);
  border-radius: 20px;
`;

export const RatingsContainer = styled.div`
  margin: 15px 0;
`;

export const DeckTitle = styled.h4`
  font-size: 31px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const DeckDescription = styled.p`
  font-size: 21px;
  line-height: 26px;
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
`;

export const ButtonsContainer = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > button {
    width: 35%;
    height: 50px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 15px;
  }
`;
