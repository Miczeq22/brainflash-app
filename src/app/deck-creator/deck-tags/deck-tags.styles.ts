import styled from 'styled-components';

export const StyledForm = styled.form`
  & .ant-select-selector,
  & .ant-select,
  & .ant-select.ant-select-multiple.ant-select-allow-clear.ant-select-show-search {
    height: 50px;
  }

  & > button {
    display: block;
    margin: 20px auto 0;
    height: 50px;
    border-radius: 20px;
    width: 35%;
  }
`;
