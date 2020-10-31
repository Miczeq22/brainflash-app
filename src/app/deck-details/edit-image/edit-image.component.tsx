import { uploadFileAction } from '@api/actions/deck-creator/deck-creator.actions';
import { RcCustomRequestOptions } from 'antd/lib/upload/interface';
import React from 'react';
import { useMutation } from 'react-fetching-library';
import UploadIcon from '@assets/upload.svg';
import { useDeckDetailsState } from '@hooks/use-deck-details-state/use-deck-details-state.hook';
import { updateDeckMetadata } from '@api/actions/deck-details/deck-details.action';
import { setDeckImageUrlEditMode } from '@context/deck-details/deck-details.action-creators';
import { ImageContainer, StyledDragger } from './edit-image.styles';

interface EditImageProps {
  deckId: string;
}

export const EditImage = ({ deckId }: EditImageProps) => {
  const { mutate: uploadImage } = useMutation(uploadFileAction);
  const { mutate: updateMetadata } = useMutation(updateDeckMetadata);
  const { dispatch } = useDeckDetailsState();

  const [uploadingImage, setUploadingImage] = React.useState(false);

  const handleRequest = async (options: RcCustomRequestOptions) => {
    setUploadingImage(true);

    const { file, onSuccess } = options;

    const formData = new FormData();

    formData.append('file', file);

    const { payload: response } = await uploadImage({ data: formData });

    if (response) {
      onSuccess(response as object, file);

      await updateMetadata({
        deckId,
        imageUrl: response.fileName,
      });

      setUploadingImage(false);
      dispatch(setDeckImageUrlEditMode(false));
    }
  };

  return (
    <ImageContainer>
      <StyledDragger
        name="file"
        multiple={false}
        showUploadList={false}
        customRequest={handleRequest}
        accept="image/*"
        className="file-uploader"
        disabled={uploadingImage}
      >
        <img alt="Drag and drop file" src={UploadIcon} />
        <p>Drag an image here or click to browse for an image to upload.</p>
      </StyledDragger>
    </ImageContainer>
  );
};
