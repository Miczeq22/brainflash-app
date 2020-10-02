/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

interface ActionsContainerProps {
  notificationCount?: number;
}

export const StyledTopbar = styled.section`
  display: flex;
  justify-content: space-between;
  max-height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 15px;

  & > .ant-input-search:not(.ant-input-search-enter-button) {
    border-radius: 20px;
    padding: 10px 15px;
  }

  & > span {
    max-width: 300px;
  }
`;

export const ActionsContainer = styled.div<ActionsContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > button {
    padding: 0 40px;
    line-height: 0;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > .anticon {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.color.primary};

      & > svg {
        width: 100%;
        height: 100%;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      min-width: auto;
    }
  }

  & > .language-select {
    margin: 0 20px;
  }

  & > .anticon {
    cursor: pointer;
    width: 35px;
    height: 35px;
    position: relative;

    & svg {
      width: 100%;
      height: 100%;
    }

    &::after {
      ${({ notificationCount = 0 }) =>
        notificationCount > 0
          ? notificationCount > 9
            ? "content: '+9'"
            : `content: '${notificationCount}'`
          : ''};
      background-color: ${({ theme }) => theme.color.primary};
      width: 20px;
      height: 20px;
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      border-radius: 50%;
      color: ${({ theme }) => theme.color.white};
      font-size: 12px;
      line-height: 20px;
      font-weight: 700;
    }
  }
`;
