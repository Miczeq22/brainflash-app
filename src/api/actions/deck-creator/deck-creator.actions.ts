import { ApiAction } from 'src/types';

export interface UploadImagePayload {
  data: FormData;
}

export interface UploadImageResponse {
  fileName: string;
  fileLocation: string;
}

export const uploadFileAction = (payload: UploadImagePayload): ApiAction<UploadImageResponse> => ({
  method: 'POST',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/upload-image`,
  body: payload.data,
});
