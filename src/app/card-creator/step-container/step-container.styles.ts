import styled from 'styled-components';

export const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ececec;
`;

export const SectionTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.fontPrimary};
`;

export const SectionDescription = styled.p`
  font-size: 18px;
  max-width: 55%;
  line-height: 30px;
  margin: 15px 0 30px;
  color: ${({ theme }) => theme.color.fontPrimary};
  font-weight: 300;
`;
