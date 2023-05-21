import { TInstanceInfo } from './types';

export const API_ROUTE = 'https://api.green-api.com';
export const WA = '/waInstance';

export const instanceInfo: TInstanceInfo = {
  idInstance: process.env.REACT_APP_INSTANCE_ID || '',
  apiTokenInstance: process.env.REACT_APP_API_TOKEN_INSTANCE || '',
};
