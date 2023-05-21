import { loginUp, $isLogin } from '@entities/account/model/auth';
import { useNavigate } from '@tanstack/react-location';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const isLogin = useStore($isLogin);
  useEffect(() => {
    if (isLogin) {
      navigate({ to: '/home' });
    }
  }, [isLogin, navigate]);
  const loginHandler = () => {
    loginUp();
    navigate({ to: '/home' });
  };
  return <button onClick={loginHandler}> Login </button>;
};
