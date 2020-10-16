import { CheckOutlined, ClearOutlined } from '@ant-design/icons';
import {
  setDeckCreatorStep,
  setDeckDescription,
  setDeckName,
} from '@context/deck-creator/deck-creator.action-creators';
import { useDeckCreatorState } from '@hooks/use-deck-creator-state/use-deck-creator-state.hook';
import { FormikField } from '@ui/formik-field/formik-field.component';
import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { ButtonsContainer, StyledForm } from './title-and-description-form.styles';

interface FormPayload {
  name: string;
  description: string;
}

export const TitleAndDescriptionForm = () => {
  const {
    state: { name, description },
    dispatch,
  } = useDeckCreatorState();

  const handleSubmit = (values: FormPayload) => {
    dispatch(setDeckName(values.name));
    dispatch(setDeckDescription(values.description));
    dispatch(setDeckCreatorStep(2));
  };

  const formik = useFormik<FormPayload>({
    initialValues: {
      name,
      description,
    },
    onSubmit: handleSubmit,
    validationSchema: Yup.object({
      name: Yup.string().trim().min(3).required(),
      description: Yup.string().trim().min(3).required(),
    }),
    validateOnMount: true,
  });

  const handleClear = () => {
    dispatch(setDeckName(''));
    dispatch(setDeckDescription(''));

    formik.setFieldValue('name', '');
    formik.setFieldValue('description', '');
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <FormikField touched={formik.touched.name} error={formik.errors.name} label="Deck name">
        <Input placeholder="Enter deck name..." {...formik.getFieldProps('name')} />
      </FormikField>
      <FormikField
        touched={formik.touched.description}
        error={formik.errors.description}
        label="Deck description"
      >
        <Input.TextArea
          placeholder="Enter deck description..."
          style={{
            minHeight: '200px',
          }}
          {...formik.getFieldProps('description')}
        />
      </FormikField>
      <ButtonsContainer>
        <Button icon={<ClearOutlined />} onClick={handleClear} htmlType="button">
          Clear form
        </Button>
        <Button type="primary" icon={<CheckOutlined />} htmlType="submit">
          Go to next step
        </Button>
      </ButtonsContainer>
    </StyledForm>
  );
};
