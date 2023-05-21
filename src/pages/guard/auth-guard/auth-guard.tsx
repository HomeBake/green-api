import { useStore } from 'effector-react';

import { $isLogin } from '@entities/account/model/auth';
import { Navigate } from '@tanstack/react-location';

type Props = {
  children: JSX.Element;
};

export const AuthGuard = ({ children }: Props) => {
  const isLogin = useStore($isLogin);
  return isLogin ? children : <Navigate to={'/login'} />;
};
