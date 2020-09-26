import styled from 'styled-components';

export const RegisterPageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
    margin-top: 200px;
  }
`;
