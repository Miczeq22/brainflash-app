import styled from 'styled-components';
import { animated } from 'react-spring';
import { Button } from 'antd';

export const CardContainer = styled.div`
  position: relative;
  width: 700px;
  height: 350px;
  min-height: 350px;
`;

export const CardFront = styled(animated.section)`
  width: 100%;
  height: 100%;
  min-height: 350px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
`;

export const FrontContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DeckTitle = styled.h4`
  font-size: 500;
  color: ${({ theme }) => theme.color.gray};
  font-size: 15px;
`;

export const QuestionText = styled.p`
  font-weight: 700;
  font-size: 19px;
  border: 1px dashed ${({ theme }) => theme.color.lightGray};
  margin-top: 20px;
  outline: none;
  height: 60%;
  overflow-y: scroll;
`;

export const QuestionNumber = styled.span`
  background-color: ${({ theme }) => theme.color.lightGray};
  width: fit-content;
  padding: 10px;
  color: ${({ theme }) => theme.color.fontPrimary};
  border-radius: 10px;
  font-weight: 700;
`;

export const CardBack = styled(animated.section)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;
  border: 1px solid #ececec;
  min-height: 350px;
`;

export const NextButton = styled(Button)`
  position: absolute;
  right: -35px;
  top: calc(50% - 30px);
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const PreviousButton = styled(Button)`
  position: absolute;
  left: -35px;
  top: calc(50% - 30px);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 2;
`;
