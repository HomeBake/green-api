export const API_ROUTE = 'https://api.green-api.com'
export const WA = '/waInstance';

import { TInstanceInfo } from './types';

export const instanceInfo: TInstanceInfo = {
  idInstance: process.env.INSTANCE_ID || '',
  apiTokenInstance: process.env.API_TOKEN_INSTANCE || '',
};
