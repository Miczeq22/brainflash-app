import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 760px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterHeading = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};
  text-align: center;

  & > span {
    color: ${({ theme }) => theme.color.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 30px;
  }
`;

export const RegisterDescription = styled.h3`
  font-size: 21px;
  text-align: center;
  max-width: 90%;
  margin: 10px 0 40px;
  color: ${({ theme }) => theme.color.fontGray};

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 17px;
  }
`;

export const InputsContainer = styled.section`
  width: 90%;
`;

export const HelpersContainer = styled.section`
  margin-top: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & label {
    margin: 5px 0 !important;
    font-size: 15px;
  }
`;

export const ButtonsContainer = styled.section`
  margin-top: 20px;
  width: 90%;

  & > button {
    width: 100%;
    padding: 20px 0;
    line-height: 0;
    font-weight: 700;
  }
`;

export const AlreadyMemberContainer = styled.div`
  margin: 15px 0;
  text-align: center;
`;
