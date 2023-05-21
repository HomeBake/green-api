import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiSendMessage } from '../../../../shared/api/api-message/api';

import {
  TSendMessageRequest,
  TSendMessageResponse,
} from '../../../../shared/api/api-message/types';
import {
  TInstanceInfo,
  UnknownBusinessError,
} from '../../../../shared/api/types';
import { messageKeys } from '../../query-keys';
import { instanceInfo } from '../../../../shared/api/constant';

type TUseSendMessage = {
  onSuccess: (data: TSendMessageResponse) => void;
  onError: (businessError: UnknownBusinessError) => void;
};

type TRequestParam = TSendMessageRequest;

export const UseSendMessage = ({ onSuccess, onError }: TUseSendMessage) => {
  const { mutateAsync, ...rest } = useMutation(
    messageKeys.send(),
    ({ requestParam }: { requestParam: TRequestParam }) =>
      apiSendMessage({ ...requestParam, ...instanceInfo }),
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
