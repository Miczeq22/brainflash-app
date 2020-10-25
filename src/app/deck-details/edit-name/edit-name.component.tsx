import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FormikField } from '@ui/formik-field/formik-field.component';
import { InputContainer, StyledContainer } from './edit-name.styles';
import { useMutation } from 'react-fetching-library';
import { updateDeckNameAction } from '@api/actions/deck-details/deck-details.action';
import { useDeckDetailsState } from '@hooks/use-deck-details-state/use-deck-details-state.hook';
import { setDeckNameEditMode } from '@context/deck-details/deck-details.action-creators';

interface EditNameProps {
  actualName: string;
  deckId: string;
}

interface FormikPayload {
  name: string;
}

export const EditName = ({ actualName, deckId }: EditNameProps) => {
  const { dispatch } = useDeckDetailsState();

  const { mutate, loading } = useMutation(updateDeckNameAction);

  const onSubmit = async ({ name }: FormikPayload) => {
    const { error, payload } = await mutate({
      deckId,
      newName: name,
    });

    if (error) {
      message.error(payload?.error);
    } else {
      dispatch(setDeckNameEditMode(false));
    }
  };

  const formik = useFormik<FormikPayload>({
    initialValues: {
      name: actualName,
    },
    onSubmit,
    validationSchema: Yup.object({
      name: Yup.string().min(3).trim().required(),
    }),
    validateOnMount: true,
  });

  const handleCancel = () => dispatch(setDeckNameEditMode(false));

  return (
    <StyledContainer onSubmit={formik.handleSubmit}>
      <FormikField error={formik.errors.name} touched={formik.touched.name} label="Deck name">
        <InputContainer>
          <Input placeholder="Enter deck name..." {...formik.getFieldProps('name')} />
          <Button type="primary" htmlType="submit" icon={<CheckOutlined />} loading={loading} />
          <Button
            htmlType="submit"
            icon={<CloseOutlined />}
            onClick={handleCancel}
            loading={loading}
          />
        </InputContainer>
      </FormikField>
    </StyledContainer>
  );
};
