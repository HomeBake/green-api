import { useInvalidateAvatar } from '@entities/account/model';
import { setReceiverNumber } from '@entities/message/model/message';
import { useNavigate } from '@tanstack/react-location';
import { NewChat } from './new-chat';

export const NewChatConnector = () => {
  const navigate = useNavigate();
  const invalidateAvatar = useInvalidateAvatar();

  const onSubmitHandler = (number: string) => {
    invalidateAvatar();
    setReceiverNumber(number);
    navigate({ to: '/home' });
  };
  return <NewChat onSubmit={onSubmitHandler}></NewChat>;
};
