import axios, { AxiosResponse } from 'axios';
import { API_ROUTE, WA } from '../constant';
import { TInstanceInfo } from '../types';

import { TSendMessageRequest, TSendMessageResponse } from './types';

export const ROUTE = '/SendMessage';

export const apiSendMessage = async ({
  idInstance,
  apiTokenInstance,
  ...requestBody
}: TSendMessageRequest & TInstanceInfo): Promise<
  AxiosResponse<TSendMessageResponse>
> => {
  const url = `${API_ROUTE}${WA}${idInstance}${ROUTE}/${apiTokenInstance}`;
  const response = await axios.post(url, { ...requestBody });
  return response;
};

//POST https://api.green-api.com/waInstance{{idInstance}}/SendMessage/{{apiTokenInstance}}
