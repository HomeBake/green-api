import { Navigate, Route } from '@tanstack/react-location';
import { Logout } from '@pages/auth/logout';
import { AuthGuard } from '@pages/guard/auth-guard';
import { LoginConnector } from '@pages/auth/login';
import { MessagesConnector } from '@pages/messager/messages';

export const routes: Route[] = [
  {
    path: '/login',
    element: <LoginConnector />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: '/home',
    element: (
      <AuthGuard>
        <MessagesConnector />
      </AuthGuard>
    ),
  },
  {
    element: <Navigate to={'/login'} />,
  },
];
