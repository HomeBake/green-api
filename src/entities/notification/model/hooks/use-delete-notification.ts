import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

import {
  TDeleteNotificationResponse,
  TDeleteNotificationRequest,
  apiDeleteNotification,
  TInstanceInfo,
  UnknownBusinessError,
} from '@shared/api';

import { notificationKeys } from '../../query-keys';

type TUseDeleteNotification = {
  onSuccess?: (data: TDeleteNotificationResponse) => void;
  onError?: (businessError: UnknownBusinessError) => void;
};

type TRequestParam = TDeleteNotificationRequest & TInstanceInfo;

export const useDeleteNotification = ({
  onSuccess,
  onError,
}: TUseDeleteNotification) => {
  const { mutateAsync, ...rest } = useMutation(
    notificationKeys.delete(),
    ({ requestParam }: { requestParam: TRequestParam }) =>
      apiDeleteNotification({ ...requestParam }),
    {
      onSuccess: ({ data }) => {
        if (onSuccess) {
          onSuccess(data);
        }
      },
      onError: ({ response }: AxiosError<UnknownBusinessError>) => {
        if (!onError) {
          return;
        }
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

  const deleteNotification = useCallback(
    (requestParam: TRequestParam) => {
      return mutateAsync({
        requestParam,
      });
    },
    [mutateAsync],
  );
  return { ...rest, deleteNotification };
};
