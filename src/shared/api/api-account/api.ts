import axios, { AxiosResponse } from 'axios';

import { API_ROUTE, WA } from '../constant';
import { TInstanceInfo } from '../types';
import { TStateInstanceRequest, TStateInstanceResponse } from './types';

export const ROUTE = '/getStateInstance';

export const apiGetStateInstance = async ({
  idInstance,
  apiTokenInstance,
  ...requestBody
}: TStateInstanceRequest & TInstanceInfo): Promise<
  AxiosResponse<TStateInstanceResponse>
> => {
  const url = `${API_ROUTE}${WA}${idInstance}${ROUTE}/${apiTokenInstance}`;
  const response = await axios.get(url);
  return response;
};

// GET https://api.green-api.com/waInstance{{idInstance}}/getStateInstance/{{apiTokenInstance}}
