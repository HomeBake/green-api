import { Route } from '@tanstack/react-location';
import { Test } from './test';
import { Login } from '../pages/auth/login/login';
import { Logout } from '@pages/auth/logout';
import { AuthGuard } from '@pages/guard/auth-guard';

export const routes: Route[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: '/home',
    element: (
      <AuthGuard>
        <Test />
      </AuthGuard>
    ),
  },
];
