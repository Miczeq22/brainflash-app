import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { FormikField } from '@ui/formik-field/formik-field.component';
import { Button, Checkbox, Input } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterPayload } from 'src/api/actions/auth/auth.actions';
import * as Yup from 'yup';
import {
  RegisterHeading,
  AlreadyMemberContainer,
  ButtonsContainer,
  HelpersContainer,
  InputsContainer,
  RegisterDescription,
  StyledForm,
} from './register-form.styles';

export interface RegisterInput extends RegisterPayload {
  confirmPassword: string;
  termsAccepted: boolean;
  addToMailingList: boolean;
}

interface RegisterFormProps {
  onSubmit: (values: RegisterInput) => Promise<void>;
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const formik = useFormik<RegisterInput>({
    initialValues: {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
      termsAccepted: false,
      addToMailingList: false,
    },
    onSubmit: (values) => onSubmit(values),
    validateOnMount: true,
    validationSchema: Yup.object({
      username: Yup.string().trim().required(),
      email: Yup.string().email().required(),
      password: Yup.string().trim().required(),
      confirmPassword: Yup.string()
        .trim()
        // @ts-ignore
        .test('equal', 'Passwords do not match', function (value: string) {
          const passwordRef = Yup.ref('password');

          return value === this.resolve(passwordRef);
        }),
      termsAccepted: Yup.boolean().oneOf([true], 'Must accept terms and conditions'),
    }),
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <RegisterHeading>
        Register to <span>Brainflash</span>
      </RegisterHeading>
      <RegisterDescription>
        Sign up to Brainflash app. No credit card required. Start using today!
      </RegisterDescription>
      <InputsContainer>
        <FormikField touched={formik.touched.username} error={formik.errors.username}>
          <Input
            placeholder="Enter your username..."
            prefix={<UserOutlined />}
            {...formik.getFieldProps('username')}
          />
        </FormikField>
        <FormikField touched={formik.touched.email} error={formik.errors.email}>
          <Input
            prefix={<MailOutlined />}
            placeholder="Enter your address email..."
            {...formik.getFieldProps('email')}
          />
        </FormikField>
        <FormikField touched={formik.touched.password} error={formik.errors.password}>
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Enter your password..."
            {...formik.getFieldProps('password')}
          />
        </FormikField>
        <FormikField touched={formik.touched.confirmPassword} error={formik.errors.confirmPassword}>
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirm password..."
            {...formik.getFieldProps('confirmPassword')}
          />
        </FormikField>
      </InputsContainer>
      <HelpersContainer>
        <Checkbox
          {...formik.getFieldProps('addToMailingList')}
          checked={formik.values.addToMailingList}
        >
          Add to mailing list.
        </Checkbox>
        <FormikField touched={formik.touched.termsAccepted} error={formik.errors.termsAccepted}>
          <Checkbox
            {...formik.getFieldProps('termsAccepted')}
            checked={formik.values.termsAccepted}
          >
            I have read, understand and agree to <Link to="/">Terms and Conditions.</Link>
          </Checkbox>
        </FormikField>
      </HelpersContainer>
      <ButtonsContainer>
        <Button type="primary" htmlType="submit">
          Create Account
        </Button>
        <AlreadyMemberContainer>
          Alrady a member? <Link to="/login">Sign in.</Link>
        </AlreadyMemberContainer>
      </ButtonsContainer>
    </StyledForm>
  );
};
