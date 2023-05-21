import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

export const $isLogin = createStore(false);

export const loginUp = createEvent();

export const logOut = createEvent();

sample({
  clock: loginUp,
  fn: () => true,
  target: $isLogin,
});

sample({
  clock: logOut,
  fn: () => false,
  target: $isLogin,
});

persist({
  store: $isLogin,
  key: 'login',
});
