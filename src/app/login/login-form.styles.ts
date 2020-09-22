import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 760px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginHeading = styled.h2`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.color.fontPrimary};

  & > span {
    color: ${({ theme }) => theme.color.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 30px;
  }
`;

export const LoginDescription = styled.h3`
  font-size: 21px;
  text-align: center;
  max-width: 90%;
  color: ${({ theme }) => theme.color.fontGray};
  margin: 10px 0 40px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 17px;
  }
`;

export const InputsContainer = styled.section`
  width: 90%;
`;

export const HelpersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 40px;
  width: 90%;

  & > a {
    font-size: 14px;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;

  & > button {
    padding: 20px 50px;
    line-height: 0;
    font-weight: 700;

    width: 48%;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    flex-direction: column;

    & > button {
      width: 100%;
    }

    & > button:first-child {
      margin-bottom: 20px;
    }
  }
`;
