import { logOut } from '@entities/account/model/auth';
import { Navigate } from '@tanstack/react-location';

export const Logout = () => {
  logOut();
  return <Navigate to={'/login'} />;
};
