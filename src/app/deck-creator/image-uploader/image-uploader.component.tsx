import { uploadFileAction } from '@api/actions/deck-creator/deck-creator.actions';
import { RcCustomRequestOptions } from 'antd/lib/upload/interface';
import React from 'react';
import { useMutation } from 'react-fetching-library';
import UploadIcon from '@assets/upload.svg';
import { Spin } from 'antd';
import { useDeckCreatorState } from '@hooks/use-deck-creator-state/use-deck-creator-state.hook';
import {
  setDeckImageStepDone,
  setDeckImageUrl,
  startUploadingDeckImage,
  stopUploadingDeckImage,
} from '@context/deck-creator/deck-creator.action-creators';
import { StyledContainer, StyledDragger, StyledImage, StyledText } from './image-uploader.styles';

export const ImageUploaderComponent = () => {
  const { dispatch } = useDeckCreatorState();

  const { mutate } = useMutation(uploadFileAction);

  const handleRequest = async (options: RcCustomRequestOptions) => {
    dispatch(startUploadingDeckImage());

    const { file, onSuccess } = options;

    const formData = new FormData();

    formData.append('file', file);

    const { payload: response } = await mutate({ data: formData });

    if (response) {
      onSuccess(response as object, file);

      dispatch(setDeckImageUrl(response.fileLocation));
      dispatch(stopUploadingDeckImage());
      dispatch(setDeckImageStepDone(true));
    }
  };

  return (
    <Spin spinning={false} tip="Uploading image...">
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
          <StyledText>Drag an image here or click to browser for an image to upload.</StyledText>
        </StyledContainer>
      </StyledDragger>
    </Spin>
  );
};
