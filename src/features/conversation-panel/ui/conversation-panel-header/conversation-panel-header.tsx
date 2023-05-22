import { Button } from '@shared/ui/atoms/button';
import { Typography } from '@shared/ui/atoms/typography';
import { UserIcon } from '@shared/ui/atoms/user-icon';
import { styled } from 'styled-components';

type Props = {
  img: string;
  userName: string;
  onNewChatClick: () => void;
};

const Wrapper = styled.div`
  display: flex;
  background: rgb(32, 44, 51);
  align-items: center;
  padding: 9px 20px;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ConversationPanelHeader = ({
  img,
  userName,
  onNewChatClick,
}: Props) => {
  return (
    <Wrapper>
      <UserInfo>
        <UserIcon img={img} size="40px" />
        <Typography variant="subtitle1">{userName}</Typography>
      </UserInfo>
      <Button variant="outlined" onClick={onNewChatClick}>
        <Typography variant="subtitle1"> New chat</Typography>
      </Button>
    </Wrapper>
  );
};
