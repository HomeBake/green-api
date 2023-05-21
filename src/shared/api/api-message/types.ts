export type TSendMessageRequest = {
  chatId: string;
  message: string;
  quotedMessageId?: string;
  archiveChat?: boolean;
  linkPreview?: boolean;
};

export type TSendMessageResponse = {
  idMessage: string
};