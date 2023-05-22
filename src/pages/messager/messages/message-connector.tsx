import { $instanceData } from '@entities/account/model/instance';
import { useGetNotification } from '@entities/notification/model';
import { useStore } from 'effector-react';
import { Messages, TMessage } from './messages';
import { useDeleteNotification } from '@entities/notification/model/hooks/use-delete-notification';
import { useEffect, useState } from 'react';
import { messagesMock } from './mock';
import {
  $receiverNumber,
  resetReceiverNumber,
} from '@entities/message/model/message';
import { Navigate } from '@tanstack/react-location';
import { useGetAvatar, useInvalidateAvatar } from '@entities/account/model';

export type TSendMessageBody = {
  chatId: string;
  message: string;
};

export const MessagesConnector = () => {
  const instanceData = useStore($instanceData);
  const receiverNumber = useStore($receiverNumber);
  const chatId = `${receiverNumber}@c.us`;
  console.log(chatId);
  const [messages, setMessages] = useState<TMessage[]>(messagesMock);

  const { data } = useGetNotification(instanceData);
  const { deleteNotification } = useDeleteNotification({
    onSuccess: () => console.log('Remove'),
  });
  const {
    data: avatarData,
    isError,
    isLoading: isAvatarLoading,
  } = useGetAvatar({
    chatId,
    ...instanceData,
  });
  const invalidateAvatar = useInvalidateAvatar();

  useEffect(() => {
    if (isError) {
      return;
    }
    const message = data?.data?.body?.messageData?.textMessageData?.textMessage;
    const time = data?.data?.body?.timestamp;
    if (message && time) {
      setMessages(prev => [
        ...prev,
        { body: message, time: String(time), type: 'left' },
      ]);
      deleteNotification({ ...instanceData, receiptId: data?.data?.receiptId });
    }
  }, [deleteNotification, instanceData, data, isError]);

  if ((isError || !avatarData?.data.existsWhatsapp) && !isAvatarLoading) {
    resetReceiverNumber();
    invalidateAvatar();
    return <Navigate to="/new-chat"></Navigate>;
  }

  return (
    <Messages
      userInfo={{
        avatarUrl: avatarData?.data.urlAvatar || '',
        userName: `+ ${receiverNumber}` || '',
      }}
      messages={messages || ''}
      setMessages={setMessages}
    />
  );
};
