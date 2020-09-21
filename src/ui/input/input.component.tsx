import React from 'react';
import styled from 'styled-components';
import { Input as AntInput } from 'antd';

interface InputProps extends Partial<AntInput> {
  touched?: boolean;
  error?: string;
}

const ErrorField = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.color.error};
  font-size: 14px;

  &::before {
    content: '* ';
  }
`;

interface InputContainerProps {
  readonly displayError?: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
  .ant-input-affix-wrapper {
    border: ${({ theme, displayError }) =>
      displayError ? `1px solid ${theme.color.error}` : '1px solid #d9d9d9'};
  }
`;

export const Input = ({ touched, error, ...inputProps }: InputProps) => {
  const shouldDisplayError = React.useMemo(() => touched && error, [touched, error]);

  return (
    <InputContainer displayError={shouldDisplayError as boolean}>
      <AntInput {...inputProps} />
      {shouldDisplayError && <ErrorField>{error}</ErrorField>}
    </InputContainer>
  );
};
