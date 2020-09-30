import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: ${({ theme }) => theme.color.gray};
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 100vh;

  & > li {
    margin: 20px 0;
  }

  & > li:first-child {
    margin-top: 0;
  }

  & > li:last-child {
    margin-bottom: 0;
  }
`;

export const EmptyListText = styled.h3`
  font-weight: 500;
  font-size: 17px;
`;
