import axios, { AxiosResponse } from 'axios';

import { API_ROUTE, WA } from '../constant';
import { TInstanceInfo } from '../types';
import {
  TGetAvatarRequest,
  TGetAvatarResponse,
  TStateInstanceRequest,
  TStateInstanceResponse,
} from './types';

export const GET_STATE_ROUTE = '/getStateInstance';
export const GET_AVATAR_ROUTE = '/GetAvatar';

export const apiGetStateInstance = async ({
  idInstance,
  apiTokenInstance,
  ...requestBody
}: TStateInstanceRequest & TInstanceInfo): Promise<
  AxiosResponse<TStateInstanceResponse>
> => {
  const url = `${API_ROUTE}${WA}${idInstance}${GET_STATE_ROUTE}/${apiTokenInstance}`;
  const response = await axios.get(url);
  return response;
};

// GET https://api.green-api.com/waInstance{{idInstance}}/getStateInstance/{{apiTokenInstance}}

export const apiGetAvatar = async ({
  idInstance,
  apiTokenInstance,
  ...requestBody
}: TGetAvatarRequest & TInstanceInfo): Promise<
  AxiosResponse<TGetAvatarResponse>
> => {
  const url = `${API_ROUTE}${WA}${idInstance}${GET_AVATAR_ROUTE}/${apiTokenInstance}`;
  const response = await axios.post(url, { ...requestBody });
  return response;
};

//POST https://api.green-api.com/waInstance{{idInstance}}/GetAvatar/{{apiTokenInstance}}
