import styled from 'styled-components';

interface StyledListItemProps {
  active?: boolean;
}

interface DeckImageProps {
  imgUrl?: string;
}

export const StyledListItem = styled.li<StyledListItemProps>`
  list-style: none;
  background-color: ${({ theme, active = false }) =>
    active ? theme.color.lightGray : theme.color.white};
  border: ${({ theme, active = false }) =>
    active ? `2px solid ${theme.color.white}` : `2px solid ${theme.color.gray}`};
  border-radius: 10px;
  padding: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  outline: none;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

export const DeckImg = styled.div<DeckImageProps>`
  ${({ imgUrl }) => imgUrl && `background-image: url('${imgUrl}');`};
  background-position: center;
  background-size: cover;
  background-color: rgba(95, 129, 244, 0.3);
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

export const StyledTitle = styled.h3`
  font-size: 19px;
  font-weight: 700;
`;

export const RatingsContainer = styled.div`
  transform: scale(0.6) translateX(-33%);
`;
