import { useNavigate } from '@tanstack/react-location';
import { resetReceiverNumber } from '@entities/message/model/message';

import { ConversationPanelHeader } from './conversation-panel-header';

type Props = {
  img: string;
  userName: string;
};

export const ConversationPanelHeaderConnector = ({ img, userName }: Props) => {
  const navigation = useNavigate();
  const onNewChatClick = () => {
    resetReceiverNumber();
    navigation({ to: '/new-chat' });
  };
  return (
    <ConversationPanelHeader
      img={img}
      userName={userName}
      onNewChatClick={onNewChatClick}
    />
  );
};
