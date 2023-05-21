import { InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { Typography } from '../../atoms/typography/typography';

type Props = {
  leftItem?: ReactNode;
  title?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Wrapper = styled.div``;

export const Input = ({ leftItem, title, ...rest }: Props) => {
  return (
    <Wrapper>
      {title ? <Typography>{title}</Typography> : null}
      <input {...rest} />
    </Wrapper>
  );
};
