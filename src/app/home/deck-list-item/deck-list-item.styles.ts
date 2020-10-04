import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyledListItemProps {
  active?: boolean;
}

interface DeckImageProps {
  imgUrl?: string;
}

export const StyledListItem = styled.li<StyledListItemProps>`
  list-style: none;
  padding: 0;
  outline: none;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 20px;
  height: fit-content;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  padding: 0;
`;

export const DeckImg = styled.div<DeckImageProps>`
  ${({ imgUrl }) => imgUrl && `background-image: url('${imgUrl}');`};
  background-position: center;
  background-size: cover;
  background-color: rgba(95, 129, 244, 0.3);
  height: 250px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const DescriptionContainer = styled.div`
  padding: 10px 20px;
`;

export const StyledTitle = styled.h3`
  text-align: left;
  font-size: 19px;
  font-weight: 700;
`;

export const RatingsContainer = styled.div`
  margin: 15px 0;

  & > .ratings {
    li {
      max-width: 15px;
    }

    span {
      font-size: 17px;
    }
  }
`;
