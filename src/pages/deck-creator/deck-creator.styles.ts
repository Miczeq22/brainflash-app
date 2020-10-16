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
  height: calc(100vh - 71px);
  background-color: ${({ theme }) => theme.color.lightGray};
  padding: 20px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
`;

export const ActionContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #ececec;
  flex: 1;
  margin-top: 20px;
  overflow-y: scroll;
`;

export const UploadImageContainer = styled.div`
  & > button {
    display: block;
    margin: 15px auto 0;
    height: 50px;
    border-radius: 15px;
    padding: 0 30px;
  }
`;
