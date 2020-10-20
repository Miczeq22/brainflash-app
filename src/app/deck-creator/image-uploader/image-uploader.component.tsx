import { uploadFileAction } from '@api/actions/deck-creator/deck-creator.actions';
import { RcCustomRequestOptions } from 'antd/lib/upload/interface';
import React from 'react';
import { useMutation } from 'react-fetching-library';
import UploadIcon from '@assets/upload.svg';
import { useDeckCreatorState } from '@hooks/use-deck-creator-state/use-deck-creator-state.hook';
import {
  setDeckCreatorStep,
  setDeckImageData,
  startUploadingDeckImage,
  stopUploadingDeckImage,
} from '@context/deck-creator/deck-creator.action-creators';
import {
  StyledContainer,
  StyledDragger,
  StyledImage,
  StyledSpin,
  StyledText,
  UploadedImageContainer,
  UploadedImagePreview,
} from './image-uploader.styles';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const ImageUploaderComponent = () => {
  const {
    dispatch,
    state: { uploadingImage, imageUrl },
  } = useDeckCreatorState();

  const { mutate } = useMutation(uploadFileAction);

  const handleRequest = async (options: RcCustomRequestOptions) => {
    dispatch(startUploadingDeckImage());

    const { file, onSuccess } = options;

    const formData = new FormData();

    formData.append('file', file);

    const { payload: response } = await mutate({ data: formData });

    if (response) {
      onSuccess(response as object, file);

      dispatch(setDeckImageData(response.fileLocation, response.fileName));
      dispatch(stopUploadingDeckImage());
      dispatch(setDeckCreatorStep(1));
    }
  };

  const handleImageRemove = () => {
    dispatch(setDeckImageData(null, null));
  };

  return (
    <StyledSpin spinning={uploadingImage} tip="Uploading image...">
      {imageUrl !== null ? (
        <UploadedImageContainer>
          <UploadedImagePreview imageUrl={imageUrl} />
          <Button icon={<DeleteOutlined />} onClick={handleImageRemove}>
            Delete image
          </Button>
        </UploadedImageContainer>
      ) : (
        <StyledDragger
          name="file"
          multiple={false}
          showUploadList={false}
          customRequest={handleRequest}
          accept="image/*"
          className="file-uploader"
        >
          <StyledContainer>
            <StyledImage alt="Drag and drop files" src={UploadIcon} />
            <StyledText>Drag an image here or click to browse for an image to upload.</StyledText>
          </StyledContainer>
        </StyledDragger>
      )}
    </StyledSpin>
  );
};
