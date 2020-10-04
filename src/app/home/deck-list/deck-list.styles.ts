import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: ${({ theme }) => theme.color.gray};
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: calc(100vh - 90px);
  display: flex;
  flex-wrap: wrap;

  & > li {
    margin: 1%;
    width: 31%;
  }
`;

export const EmptyListText = styled.h3`
  font-weight: 500;
  font-size: 17px;
`;
