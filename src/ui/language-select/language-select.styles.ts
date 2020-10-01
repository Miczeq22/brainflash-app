import { Radio } from 'antd';
import styled from 'styled-components';

export const StyledRadioGroup = styled(Radio.Group)`
  & > .ant-radio-button-wrapper:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  & > .ant-radio-button-wrapper:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  & > .ant-radio-button-wrapper.ant-radio-button-wrapper-checked {
    background-color: rgba(95, 129, 244, 0.3);
  }
`;
