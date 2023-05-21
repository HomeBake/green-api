import { UseSendMessage } from '@entities/message/model/hooks/use-send-message';
import { instanceInfo } from '@shared/api/constant';

export const Test = () => {
  console.log(instanceInfo);

  const { sendMessage } = UseSendMessage({
    onSuccess: data => {
      console.log(data);
    },
    onError: res => console.log(res),
  });

  const clickHandler = () => {
    sendMessage({ chatId: '79022520883@c.us', message: 'hello' });
  };
  return <button onClick={clickHandler}>test</button>;
};
