import Dragger from 'antd/lib/upload/Dragger';
import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 50%;
  height: 400px;

  & .ant-upload.ant-upload-drag {
    border-radius: 40px;
  }
`;

export const StyledDragger = styled(Dragger)`
  overflow: hidden;
  & .ant-upload-drag-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > img {
      width: 60%;
    }

    & > p {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
