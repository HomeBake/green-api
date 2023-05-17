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
      <Typography>{name}</Typography>
      <LastMessage image={<>status</>} text={lastMessage} />
      <Typography>{lastSeen}</Typography>
    </>
  );
};
