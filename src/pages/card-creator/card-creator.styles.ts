import styled from 'styled-components';

export const PageContainer = styled.main``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;

  & > a {
    padding: 10px 20px;
  }
`;

export const BodyContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.lightGray};
  padding: 20px;
  overflow-y: scroll;
  height: calc(100vh - 71px);
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  height: fit-content;
  align-items: center;
  justify-content: center;
`;
