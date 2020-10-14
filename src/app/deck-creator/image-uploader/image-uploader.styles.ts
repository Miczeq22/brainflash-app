import Dragger from 'antd/lib/upload/Dragger';
import styled from 'styled-components';

export const StyledDragger = styled(Dragger)`
  border: 1px solid red;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 60%;
`;

export const StyledText = styled.p`
  font-size: 19px;
  font-weight: 500;
`;
