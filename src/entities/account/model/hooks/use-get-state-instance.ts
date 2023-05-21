import { useQuery } from 'react-query';

import {
  TStateInstanceRequest,
  TInstanceInfo,
  apiGetStateInstance,
} from '@shared/api';

import { accountKeys } from '../../query-keys';

export const UseGetStateInstance = ({
  ...requestParam
}: TStateInstanceRequest & TInstanceInfo) => {
  return useQuery(accountKeys.getState(), () =>
    apiGetStateInstance({ ...requestParam }),
  );
};
