export const messageKeys = {
  all: ['all'] as const,
  message: () => [...messageKeys.all, 'message'],
  send: () => [...messageKeys.message(), 'send-message'] as const,
};
