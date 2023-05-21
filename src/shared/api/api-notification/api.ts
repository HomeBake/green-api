import axios, { AxiosResponse } from 'axios';
import { API_ROUTE, WA } from '../constant';
import { TInstanceInfo } from '../types';
import {
  TDeleteNotificationRequest,
  TDeleteNotificationResponse,
  TGetNotificationRequest,
  TGetNotificationResponse,
} from './types';

export const RECEIVE_ROUTE = '/ReceiveNotification';
export const DELETE_ROUTE = '/DeleteNotification';

export const apiGetNotification = async ({
  idInstance,
  apiTokenInstance,
  ...requestBody
}: TGetNotificationRequest & TInstanceInfo): Promise<
  AxiosResponse<TGetNotificationResponse>
> => {
  const url = `${API_ROUTE}${WA}${idInstance}${RECEIVE_ROUTE}/${apiTokenInstance}`;
  const response = await axios.get(url);
  return response;
};

// GET https://api.green-api.com/waInstance{{idInstance}}/ReceiveNotification/{{apiTokenInstance}}

export const apiDeleteNotification = async ({
  idInstance,
  apiTokenInstance,
  receiptId,
}: TDeleteNotificationRequest & TInstanceInfo): Promise<
  AxiosResponse<TDeleteNotificationResponse>
> => {
  const url = `${API_ROUTE}${WA}${idInstance}${DELETE_ROUTE}/${apiTokenInstance}/${receiptId}`;
  const response = await axios.delete(url);
  return response;
};
