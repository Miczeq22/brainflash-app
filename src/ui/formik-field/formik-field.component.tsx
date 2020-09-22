import React from 'react';
import { ErrorMessage, FieldContainer } from './formik-field.styles';

interface ErrorFieldProps {
  children: React.ReactNode;
  touched?: boolean;
  error?: string;
}

export const FormikField = ({ children, touched = false, error }: ErrorFieldProps) => {
  const shouldDisplayError = React.useMemo<boolean>(() => touched && Boolean(error), [
    touched,
    error,
  ]);

  return (
    <FieldContainer displayError={shouldDisplayError}>
      {children}
      {shouldDisplayError && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};
