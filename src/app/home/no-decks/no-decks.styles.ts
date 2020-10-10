import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > button {
    width: 20%;
    height: 50px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 17px;
  }
`;

export const StyledIcon = styled.img`
  width: 50%;
`;

export const StyledText = styled.h3`
  font-weight: 500;
  font-size: 21px;
  margin: 15px 0;
`;
