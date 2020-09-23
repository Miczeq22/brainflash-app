import styled from 'styled-components';

interface FieldContainerProps {
  readonly displayError?: boolean;
}

export const FieldContainer = styled.div<FieldContainerProps>`
  & > .ant-input-affix-wrapper,
  & > .ant-input {
    padding: 12px;

    border: ${({ theme, displayError = false }) =>
      displayError ? `1px solid ${theme.color.error}` : '1px solid #d9d9d9'};
  }

  margin: 15px 0;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.error};
  font-size: 14px;
  margin-top: 5px;
`;
