import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';
import { logOut } from '@entities/account/model/auth';

export const $receiverNumber = createStore<string | null>(null);

export const setReceiverNumber = createEvent<string>();

export const resetReceiverNumber = createEvent();

sample({
  clock: setReceiverNumber,
  fn: data => data,
  target: $receiverNumber,
});

$receiverNumber.reset(resetReceiverNumber);
$receiverNumber.reset(logOut);

persist({
  store: $receiverNumber,
  key: 'receiverNumber',
}); // very unsafe
