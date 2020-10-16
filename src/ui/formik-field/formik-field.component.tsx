import React from 'react';
import { ErrorMessage, FieldContainer, FieldLabel } from './formik-field.styles';

interface ErrorFieldProps {
  children: React.ReactNode;
  touched?: boolean;
  error?: string;
  label?: string;
}

export const FormikField = ({ children, touched = false, error, label }: ErrorFieldProps) => {
  const shouldDisplayError = React.useMemo<boolean>(() => touched && Boolean(error), [
    touched,
    error,
  ]);

  return (
    <FieldContainer displayError={shouldDisplayError}>
      {label && <FieldLabel>{label}</FieldLabel>}
      {children}
      {shouldDisplayError && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};
