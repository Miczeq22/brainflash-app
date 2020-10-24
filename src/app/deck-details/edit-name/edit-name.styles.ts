import styled from 'styled-components';

export const StyledContainer = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  & > div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  height: 50px;

  & > button {
    height: 50px;
    width: 50px;
    margin-left: 5px;
  }
`;
