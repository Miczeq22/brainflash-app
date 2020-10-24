import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FormikField } from '@ui/formik-field/formik-field.component';
import { InputContainer, StyledContainer } from './edit-name.styles';

interface EditNameProps {
  actualName: string;
}

export const EditName = ({ actualName }: EditNameProps) => {
  const onSubmit = () => {};

  const formik = useFormik({
    initialValues: {
      name: actualName,
    },
    onSubmit,
    validationSchema: Yup.object({
      name: Yup.string().min(3).trim().required(),
    }),
    validateOnMount: true,
  });

  return (
    <StyledContainer onSubmit={formik.handleSubmit}>
      <FormikField error={formik.errors.name} touched={formik.touched.name} label="Deck name">
        <InputContainer>
          <Input placeholder="Enter deck name..." {...formik.getFieldProps('name')} />
          <Button type="primary" htmlType="submit" icon={<CheckOutlined />} />
          <Button htmlType="submit" icon={<CloseOutlined />} />
        </InputContainer>
      </FormikField>
    </StyledContainer>
  );
};
