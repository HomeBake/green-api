import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Paper = ({ children }: Props) => {
  return <>{children}</>;
};
