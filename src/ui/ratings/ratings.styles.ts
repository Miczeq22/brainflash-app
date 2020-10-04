import styled from 'styled-components';

interface StyledListItemProps {
  active?: boolean;
}

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;

  & > li:last-child {
    margin-right: 0;
  }
`;

export const StyledListItem = styled.li<StyledListItemProps>`
  margin-right: 10px;
  max-width: 35px;
  fill: ${({ active = false }) => (active ? '#FDCE30' : '#B5B3B0')};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Rating = styled.span`
  font-size: 28px;
  font-weight: 700;
  margin: 0 10px;
  color: ${({ theme }) => theme.color.fontPrimary};
`;

export const NumberOfRatings = styled.span`
  font-size: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.fontGray};
`;
