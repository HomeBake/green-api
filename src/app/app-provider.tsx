import { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@shared/api/query-client';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
