import styled from 'styled-components';

export const FormContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    background-color: ${({ theme }) => theme.color.white};
  }

  & > .logo {
    position: absolute;
    top: 30px;
    left: 30px;

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  & > form {
    margin-top: 10px;
  }
`;

export const RegisterPageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
