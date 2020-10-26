import { setDeckDescriptionEditMode } from '@context/deck-details/deck-details.action-creators';
import { useDeckDetailsState } from '@hooks/use-deck-details-state/use-deck-details-state.hook';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import { FormikField } from '@ui/formik-field/formik-field.component';
import { Button, Input, message } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useMutation } from 'react-fetching-library';
import { updateDeckMetadata } from '@api/actions/deck-details/deck-details.action';

const StyledContainer = styled.form``;

const ButtonsContainer = styled.div`
  & > button {
    height: 50px;
    padding: 0 40px;
    border-radius: 20px;
  }

  & > button:first-child {
    margin-right: 10px;
  }
`;

interface EditDescriptionProps {
  actualDescription: string;
  deckId: string;
}

interface FormikPayload {
  description: string;
}

export const EditDescription = ({ actualDescription, deckId }: EditDescriptionProps) => {
  const { dispatch } = useDeckDetailsState();

  const { mutate, loading } = useMutation(updateDeckMetadata);

  const onSubmit = async ({ description }: FormikPayload) => {
    const { error, payload } = await mutate({
      deckId,
      description,
    });

    if (error) {
      message.error(payload?.error);
    } else {
      message.success('Deck description updated successfuly.');
      dispatch(setDeckDescriptionEditMode(false));
    }
  };

  const formik = useFormik<FormikPayload>({
    initialValues: {
      description: actualDescription,
    },
    onSubmit,
    validationSchema: Yup.object({
      description: Yup.string().min(3).trim().required(),
    }),
    validateOnMount: true,
  });

  const handleCancel = () => dispatch(setDeckDescriptionEditMode(false));

  return (
    <StyledContainer onSubmit={formik.handleSubmit}>
      <FormikField
        label="Deck description:"
        error={formik.errors.description}
        touched={formik.touched.description}
      >
        <Input.TextArea
          {...formik.getFieldProps('description')}
          style={{
            minHeight: '300px',
          }}
        />
      </FormikField>
      <ButtonsContainer>
        <Button type="primary" loading={loading} htmlType="submit">
          Save <CheckOutlined />
        </Button>
        <Button onClick={handleCancel} loading={loading} htmlType="button">
          Cancel <CloseOutlined />
        </Button>
      </ButtonsContainer>
    </StyledContainer>
  );
};
