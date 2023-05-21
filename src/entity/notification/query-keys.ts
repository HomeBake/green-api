export const notificationKeys = {
  all: ['all'] as const,
  notification: () => [...notificationKeys.all, 'message'],
  send: () => [...notificationKeys.notification(), 'get-notification'] as const,
};
