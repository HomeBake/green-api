import { $instanceData } from '@entities/account/model/instance';
import { UseGetNotification } from '@entities/notification/model';
import { useStore } from 'effector-react';
import { Messages, TMessage } from './messages';
import { UseDeleteNotification } from '@entities/notification/model/hooks/use-delete-notification';
import { useEffect, useState } from 'react';

export const MessagesConnector = () => {
  const instanceData = useStore($instanceData);
  const { data } = UseGetNotification(instanceData);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const { deleteNotification } = UseDeleteNotification({
    onSuccess: () => console.log('Remove'),
  });
  const message = data?.data?.body?.messageData.textMessageData.textMessage;
  const time = data?.data?.body?.timestamp;
  useEffect(() => {
    if (message && time) {
      setMessages(prev => [...prev, { body: message, time: time }]);
      deleteNotification({ ...instanceData, receiptId: data?.data?.receiptId });
      console.log(messages);
    }
  }, [message, deleteNotification, instanceData, data?.data?.receiptId]);
  return <Messages messages={messages || ''} />;
};
