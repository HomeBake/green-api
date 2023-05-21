import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Wrapper = styled.div``;

export const Typography = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
