import { Spin } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import styled from 'styled-components';

interface UploadedImagePreviewProps {
  imageUrl: string;
}

export const StyledSpin = styled(Spin)``;

export const StyledDragger = styled(Dragger)``;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 30%;
`;

export const StyledText = styled.p`
  font-size: 18px;
`;

export const UploadedImagePreview = styled.div<UploadedImagePreviewProps>`
  background: ${({ imageUrl }) => `url('${imageUrl}') center/cover;`};
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

export const UploadedImageContainer = styled.div`
  & > button {
    display: block;
    margin: 20px auto 0;
    padding: 0 30px;
    height: 50px;
    border-radius: 20px;
  }
`;
