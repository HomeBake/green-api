export type TGetNotificationRequest = {};

export type TGetNotificationResponse = {
  receiptId: string;
  body: TGetNotificationResponseBody;
};

export type TGetNotificationResponseBody = {
  typeWebhook: string;
  instanceData: TInstanceData;
  timestamp: number;
  idMessage: string;
  senderData: TSenderData;
  messageData: TMessageData;
} | null;

export type TInstanceData = {
  idInstance: number;
  wid: string;
  typeInstance: string;
};

export type TSenderData = {
  chatId: string;
  sender: string;
  senderName: string;
};

export type TMessageData = {
  typeMessage: string;
  textMessageData: TTextMessageData;
};

export type TTextMessageData = {
  textMessage: string;
};