export const accountKeys = {
  all: ['all'] as const,
  account: () => [...accountKeys.all, 'account'],
  getState: () => [...accountKeys.account(), 'get-account-state'] as const,
  getAvatar: () => [...accountKeys.account(), 'get-avatar'] as const,
};
