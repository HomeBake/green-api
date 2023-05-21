import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

import {
  TSendMessageResponse,
  TSendMessageRequest,
  apiSendMessage,
  TInstanceInfo,
  UnknownBusinessError,
} from '@shared/api';

import { messageKeys } from '../../query-keys';

type TUseSendMessage = {
  onSuccess: (data: TSendMessageResponse) => void;
  onError: (businessError: UnknownBusinessError) => void;
};

type TRequestParam = TSendMessageRequest & TInstanceInfo;

export const UseSendMessage = ({ onSuccess, onError }: TUseSendMessage) => {
  const { mutateAsync, ...rest } = useMutation(
    messageKeys.send(),
    ({ requestParam }: { requestParam: TRequestParam }) =>
      apiSendMessage({ ...requestParam }),
    {
      onSuccess: ({ data }) => {
        onSuccess(data);
      },
      onError: ({ response }: AxiosError<UnknownBusinessError>) => {
        if (response?.data.code && response.data.message) {
          onError(response.data);
        } else {
          onError({
            code: 'unknown_code',
            message: 'something went wrong',
            response,
          });
        }
      },
    },
  );

  const sendMessage = useCallback(
    (requestParam: TRequestParam) => {
      return mutateAsync({
        requestParam,
      });
    },
    [mutateAsync],
  );
  return { ...rest, sendMessage };
};
