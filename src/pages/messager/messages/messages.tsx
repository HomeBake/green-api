import { styled } from 'styled-components';

import {
  MessageItem,
  TMessageType,
} from '@entities/message/model/ui/message-item';
import {
  ConversationPanelHeaderConnector,
  ConversationPanelFooterConnector,
} from '@features/conversation-panel/ui';
import { ListItem } from '@shared/ui/organisms/list-item';

export type TMessage = {
  body: string;
  time: string;
  type: TMessageType;
};

export type TUserInfo = {
  avatarUrl: string;
  userName: string;
};

type Props = {
  messages: TMessage[];
  userInfo: TUserInfo;
  setMessages: React.Dispatch<React.SetStateAction<TMessage[]>>;
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

const ScrollWrapper = styled.div`
  overflow: scroll;
  height: 100%;
  padding: 10px 7%;
  background: rgb(24, 34, 41);
`;

const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  gap: 5px;
`;

const MessagesRender = (messages: TMessage[]) =>
  messages.map(message => (
    <MessageItem
      message={message.body}
      type={message.type}
      time={message.time}
    />
  ));

export const Messages = ({ messages, userInfo, setMessages }: Props) => {
  return (
    <Wrapper>
      <ConversationPanelHeaderConnector
        img={userInfo.avatarUrl}
        userName={userInfo.userName}
      />
      <ScrollWrapper>
        <MessagesWrapper>
          <ListItem items={MessagesRender(messages)} />
        </MessagesWrapper>
      </ScrollWrapper>
      <ConversationPanelFooterConnector setMessages={setMessages} />
    </Wrapper>
  );
};
