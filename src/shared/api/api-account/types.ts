export type TStateInstanceRequest = {};

export type TStateInstanceResponse = {
  stateInstance:
    | 'notAuthorized'
    | 'authorized'
    | 'blocked'
    | 'sleepMode'
    | 'starting';
};

export type TGetAvatarRequest = {
  chatId: string;
};

export type TGetAvatarResponse = {
  existsWhatsapp: boolean;
  urlAvatar: string;
  reason: string;
};
