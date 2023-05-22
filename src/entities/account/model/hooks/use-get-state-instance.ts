import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

import {
  TStateInstanceRequest,
  TInstanceInfo,
  apiGetStateInstance,
  UnknownBusinessError,
  TStateInstanceResponse,
} from '@shared/api';

import { accountKeys } from '../../query-keys';

type TUseSendMessage = {
  onSuccess: (
    data: TStateInstanceResponse,
    requestParam: TRequestParam,
  ) => void;
  onError: (businessError: UnknownBusinessError) => void;
};

type TRequestParam = TStateInstanceRequest & TInstanceInfo;

export const useGetStateInstance = ({
  onSuccess,
  onError,
}: TUseSendMessage) => {
  const { mutateAsync, ...rest } = useMutation(
    accountKeys.getState(),
    ({ requestParam }: { requestParam: TRequestParam }) =>
      apiGetStateInstance({ ...requestParam }),
    {
      onSuccess: ({ data }, { requestParam }) => {
        onSuccess(data, requestParam);
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

  const getStateInstance = useCallback(
    (requestParam: TRequestParam) => {
      return mutateAsync({
        requestParam,
      });
    },
    [mutateAsync],
  );
  return { ...rest, getStateInstance };
};
