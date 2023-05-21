export type TStateInstanceRequest = {};

export type TStateInstanceResponse = {
  stateInstance:
    | 'notAuthorized'
    | 'authorized'
    | 'blocked'
    | 'sleepMode'
    | 'starting';
};
