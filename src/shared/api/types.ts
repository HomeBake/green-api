import { AxiosResponse } from "axios";

export type TInstanceInfo = {
  idInstance: string;
  apiTokenInstance: string;
};

export type UnknownBusinessError = {
  code: 'unknown_code';
  message: 'something went wrong';
  response?: AxiosResponse<unknown>;
};