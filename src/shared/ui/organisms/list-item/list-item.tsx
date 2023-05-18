import { ReactNode } from 'react';

type Props = {
  items: ReactNode[];
};

export const ListItem = ({ items }: Props) => {
  return <>{items.map(item => item)}</>;
};
