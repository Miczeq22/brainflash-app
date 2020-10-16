import styled from 'styled-components';

export const StyledForm = styled.form``;

export const ButtonsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    display: block;
    margin: 20px auto 0;
    height: 50px;
    border-radius: 20px;
    width: 35%;
  }
`;
