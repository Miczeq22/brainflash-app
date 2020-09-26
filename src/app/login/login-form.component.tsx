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
import { useLocale } from '@hooks/use-locale/use-locale.hook';
import { AppMessages } from '@i18n/messages';

interface LoginFormProps {
  onSubmit: (payload: LoginPayload) => Promise<void>;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { formatMessage } = useLocale();

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
        {formatMessage({ id: AppMessages['login.welcome'] })}
        <span> Brainflash</span>
      </LoginHeading>
      <LoginDescription>{formatMessage({ id: AppMessages['login.description'] })}</LoginDescription>
      <InputsContainer>
        <FormikField touched={formik.touched.email} error={formik.errors.email}>
          <Input
            placeholder={formatMessage({ id: AppMessages['login.email'] })}
            prefix={<MailOutlined />}
            {...formik.getFieldProps('email')}
          />
        </FormikField>
        <FormikField touched={formik.touched.password} error={formik.errors.password}>
          <Input.Password
            placeholder={formatMessage({ id: AppMessages['login.password'] })}
            prefix={<LockOutlined />}
            {...formik.getFieldProps('password')}
          />
        </FormikField>
      </InputsContainer>
      <HelpersContainer>
        <Checkbox>{formatMessage({ id: AppMessages['login.remember'] })}</Checkbox>
        <Link to="/">{formatMessage({ id: AppMessages['login.forgotPassword'] })}</Link>
      </HelpersContainer>
      <ButtonsContainer>
        <Button type="primary" htmlType="submit">
          {formatMessage({ id: AppMessages['login.submit'] })}
        </Button>
        <Link to="/register">
          <Button htmlType="button">{formatMessage({ id: AppMessages['login.register'] })}</Button>
        </Link>
      </ButtonsContainer>
    </StyledForm>
  );
};
