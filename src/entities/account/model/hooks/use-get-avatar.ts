import { useQuery, QueryClient, useQueryClient } from 'react-query';

import { TInstanceInfo, TGetAvatarRequest } from '@shared/api';

import { accountKeys } from '../../query-keys';
import { apiGetAvatar } from '@shared/api/api-account/api';

export const useGetAvatar = ({
  chatId,
  ...requestParam
}: TGetAvatarRequest & TInstanceInfo) => {
  return useQuery(accountKeys.getAvatar(), () =>
    apiGetAvatar({ chatId, ...requestParam }),
  );
};

export const useInvalidateAvatar = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(accountKeys.getAvatar());
};
