import { Typography } from '../../atoms/typography';
import { UserIcon } from '../../atoms/user-icon';
import { LastMessage } from '../../molecules/last-message';

type Props = {
  img: string;
  name: string;
  lastMessage: string;
  status: string;
  lastSeen: string;
};

export const UserCard = ({
  img,
  name,
  status,
  lastSeen,
  lastMessage,
}: Props) => {
  return (
    <>
      <UserIcon img={img} />
      <Typography variant="h1">{name}</Typography>
      <LastMessage image={<>status</>} text={lastMessage} />
      <Typography variant="h1">{lastSeen}</Typography>
    </>
  );
};
