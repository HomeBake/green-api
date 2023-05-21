import axios, { AxiosResponse } from 'axios';
import { API_ROUTE, WA } from '../constant';
import { TInstanceInfo } from '../types';
import { TGetNotificationRequest, TGetNotificationResponse } from './types';

export const ROUTE = '/ReceiveNotification';

export const apiGetNotification = async ({
  idInstance,
  apiTokenInstance,
  ...requestBody
}: TGetNotificationRequest & TInstanceInfo): Promise<
  AxiosResponse<TGetNotificationResponse>
> => {
  const url = `${API_ROUTE}${WA}${idInstance}${ROUTE}/${apiTokenInstance}`;
  const response = await axios.get(url);
  return response;
};

// GET https://api.green-api.com/waInstance{{idInstance}}/ReceiveNotification/{{apiTokenInstance}}
