import { useStore } from 'effector-react';

import { $instanceData } from '@entities/account/model/instance';
import { useSendMessage } from '@entities/message/model';
import { $receiverNumber } from '@entities/message/model/message';
import { TMessage } from '@pages/messager/messages/messages';

import { ConversationPanelFooter } from './conversation-panel-footer';

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<TMessage[]>>;
};

export const ConversationPanelFooterConnector = ({ setMessages }: Props) => {
  const instanceData = useStore($instanceData);
  const receiverNumber = useStore($receiverNumber);
  const chatId = `${receiverNumber}@c.us`;
  const { sendMessage, isLoading } = useSendMessage({
    onSuccess: (_, request) => {
      setMessages(prev => [
        ...prev,
        { body: request.message, time: '0', type: 'right' },
      ]);
    },
    onError: () => {},
  });

  const sendHandler = (message: string) => {
    sendMessage({ chatId, message, ...instanceData });
  };
  return (
    <ConversationPanelFooter
      onSubmit={sendHandler}
      isSendDisabled={isLoading}
    />
  );
};
