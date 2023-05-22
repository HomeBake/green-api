import { useStore } from 'effector-react';

import { Navigate } from '@tanstack/react-location';
import { $receiverNumber } from '@entities/message/model/message';

type Props = {
  children: JSX.Element;
};

export const NumberGuard = ({ children }: Props) => {
  const receiverNumber = useStore($receiverNumber);
  return receiverNumber ? children : <Navigate to={'/new-chat'} />;
};
