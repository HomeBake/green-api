import { Navigate, Route } from '@tanstack/react-location';
import { Logout } from '@pages/auth/logout';
import { AuthGuard } from '@pages/guard/auth-guard';
import { LoginConnector } from '@pages/auth/login';
import { MessagesConnector } from '@pages/messager/messages';
import { NewChatConnector } from '@pages/messager/new-chat';
import { NumberGuard } from '@pages/guard/number-guard';

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
        <NumberGuard>
          <MessagesConnector />
        </NumberGuard>
      </AuthGuard>
    ),
  },
  {
    path: '/new-chat',
    element: (
      <AuthGuard>
        <NewChatConnector />
      </AuthGuard>
    ),
  },
  {
    element: <Navigate to={'/login'} />,
  },
];
