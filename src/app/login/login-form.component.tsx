import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { LoginPayload } from '@pages/login/login.page';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input } from 'antd';
import { Link } from 'react-router-dom';
import {
  ButtonsContainer,
  HelpersContainer,
  InputsContainer,
  LoginDescription,
  LoginHeading,
  StyledForm,
} from './login-form.styles';
import { FormikField } from '@ui/formik-field/formik-field.component';

interface LoginFormProps {
  onSubmit: (payload: LoginPayload) => Promise<void>;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <LoginHeading>
        Welcome to <span>Brainflash</span>
      </LoginHeading>
      <LoginDescription>
        We make it easy for everyone to learn by using flash cards.
      </LoginDescription>
      <InputsContainer>
        <FormikField touched={formik.touched.email} error={formik.errors.email}>
          <Input
            placeholder="Enter email address..."
            prefix={<MailOutlined />}
            {...formik.getFieldProps('email')}
          />
        </FormikField>
        <FormikField touched={formik.touched.password} error={formik.errors.password}>
          <Input.Password
            placeholder="Enter password..."
            prefix={<LockOutlined />}
            {...formik.getFieldProps('password')}
          />
        </FormikField>
      </InputsContainer>
      <HelpersContainer>
        <Checkbox>Remember me</Checkbox>
        <Link to="/">Forgot password?</Link>
      </HelpersContainer>
      <ButtonsContainer>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Link to="/register">
          <Button htmlType="button">Create Account</Button>
        </Link>
      </ButtonsContainer>
    </StyledForm>
  );
};
