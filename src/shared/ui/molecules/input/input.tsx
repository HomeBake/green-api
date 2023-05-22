import { InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { Typography } from '../../atoms/typography/typography';

type Props = {
  leftItem?: ReactNode;
  title?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Wrapper = styled.div`
  width: 100%;
`;

const InputWrapper = styled.input`
  width: 100%;
`;
export const Input = ({ leftItem, title, ...rest }: Props) => {
  return (
    <Wrapper>
      {title ? <Typography variant="h1">{title}</Typography> : null}
      <InputWrapper {...rest} />
    </Wrapper>
  );
};
