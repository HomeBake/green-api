import { $isLogin, loginUp } from '@entities/account/model/auth';
import { useNavigate } from '@tanstack/react-location';
import { useStore } from 'effector-react';

export const Test2 = () => {
  const navigate = useNavigate();
  const isLogin = useStore($isLogin);
  const clickHandler = () => {
    loginUp();
    navigate({ to: '/home' });
  };
  console.log(isLogin);
  return <button onClick={clickHandler}>test</button>;
};
