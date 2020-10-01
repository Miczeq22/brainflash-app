import styled from 'styled-components';

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    background-color: ${({ theme }) => theme.color.white};

    & > form {
      margin-top: 50px;
    }
  }

  & > .logo {
    position: absolute;
    top: 30px;
    left: 30px;

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      top: 10px;
      left: 50%;
      transform: translate(-50%);
    }
  }
`;

export const LoginPageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
