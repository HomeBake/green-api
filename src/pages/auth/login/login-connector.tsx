import { useStore } from 'effector-react';
import { useEffect } from 'react';

import { $isLogin, loginUp } from '@entities/account/model/auth';
import { useNavigate } from '@tanstack/react-location';
import { UseGetStateInstance } from '@entities/account/model/hooks/use-get-state-instance';

import { Login } from './login';
import { setInstanceData } from '@entities/account/model/instance';

export const LoginConnector = () => {
  const navigate = useNavigate();
  const isLogin = useStore($isLogin);
  const { getStateInstance } = UseGetStateInstance({
    onSuccess: (data, requestParam) => {
      if (
        data.stateInstance === 'authorized' ||
        data.stateInstance === 'sleepMode'
      ) {
        loginUp();
        setInstanceData(requestParam);
        navigate({ to: '/home' });
      }
      console.log(data);
    },
    onError: err => {
      console.log(err);
    },
  });
  useEffect(() => {
    if (isLogin) {
      navigate({ to: '/home' });
    }
  }, [isLogin, navigate]);
  const loginHandler = (idInstance: string, apiTokenInstance: string) => {
    console.log('sadsad');

    getStateInstance({ idInstance, apiTokenInstance });
  };
  return <Login onLogin={loginHandler} />;
};
