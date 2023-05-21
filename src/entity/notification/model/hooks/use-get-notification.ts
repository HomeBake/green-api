import { useQuery } from 'react-query';
import { apiGetNotification } from '../../../../shared/api/api-notification/api';
import {
  TGetNotificationRequest,
  TGetNotificationResponseBody,
} from '../../../../shared/api/api-notification/types';
import { instanceInfo } from '../../../../shared/api/constant';
import { TInstanceInfo } from '../../../../shared/api/types';
import { notificationKeys } from '../../query-keys';

export const UseGetNotification = ({
  ...requestParam
}: TGetNotificationRequest) => {
  return useQuery(notificationKeys.send(), () =>
    apiGetNotification({ ...requestParam, ...instanceInfo }),
  );
};
