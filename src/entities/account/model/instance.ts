import { TInstanceInfo } from '@shared/api';
import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

export const $instanceData = createStore<TInstanceInfo>({
  idInstance: '',
  apiTokenInstance: '',
});

export const setInstanceData = createEvent<TInstanceInfo>();

export const clearInstanceData = createEvent();

sample({
  clock: setInstanceData,
  fn: data => ({
    idInstance: data.idInstance,
    apiTokenInstance: data.apiTokenInstance,
  }),
  target: $instanceData,
});

$instanceData.reset(clearInstanceData);

persist({
  store: $instanceData,
  key: 'instance',
}); // very unsafe
