import { useQuery } from 'react-query';

import {
  TGetNotificationRequest,
  TInstanceInfo,
  apiGetNotification,
} from '@shared/api';

import { notificationKeys } from '../../query-keys';

export const UseGetNotification = ({
  ...requestParam
}: TGetNotificationRequest & TInstanceInfo) => {
  return useQuery(
    notificationKeys.send(),
    () => apiGetNotification({ ...requestParam }),
    { refetchInterval: 1000 },
  );
};
