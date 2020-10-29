import { Button, Rate } from 'antd';
import styled from 'styled-components';

interface StyledImageProps {
  imageUrl?: string;
}

export const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;

  button {
    line-height: initial;
    font-size: 19px;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImage = styled.div<StyledImageProps>`
  height: 400px;
  width: 50%;
  border-radius: 40px;
  ${({ imageUrl }) => imageUrl && `background: url('${imageUrl}') center/cover;`};
  background-color: rgba(95, 129, 244, 0.3);
  position: relative;

  & > button {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

export const ActionsContainer = styled.section`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 31px;
  text-align: center;
  margin-bottom: 15px;
  display: flex;
`;

export const EditNameButton = styled(Button)`
  margin-left: 5px;
  align-items: center;
`;

export const EditDescriptionButton = styled(Button)`
  padding: 0;
  margin-left: 5px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    width: 80%;
    height: 50px;
    border-radius: 30px;
    font-weight: 500;
  }

  & > button:first-child {
    margin-bottom: 15px;
  }
`;

export const DescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const DescriptionTitle = styled.h3`
  font-size: 23px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 19px;
  line-height: 30px;
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;

  & > .rating {
    margin: 0 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.fontPrimary};
  }

  & > span {
    font-size: 20px;
    color: ${({ theme }) => theme.color.fontGray};
  }
`;

export const StyledRate = styled(Rate)`
  & svg {
    width: 35px;
    height: 35px;
  }
`;
