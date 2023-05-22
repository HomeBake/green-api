import { Typography } from '@shared/ui/atoms/typography';
import { styled } from 'styled-components';

import { TMessageType } from './types';

type Props = {
  message: string;
  type: TMessageType;
  time: string;
};

const Wrapper = styled.div<{ type: TMessageType }>(({ type }) => ({
  display: 'flex',
  background: type === 'left' ? '#202c33' : 'rgb(0, 92, 75)',
  alignSelf: type === 'left' ? 'flex-start' : 'flex-end',
  color: '#e9edef',
  padding: '6px 7px 8px 9px',
  borderRadius: '7.5px',
  alignItems: ' flex-end',
  gap: '6px',
  maxWidth: '60%',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
}));

export const MessageItem = ({ message, type, time }: Props) => {
  return (
    <Wrapper type={type}>
      <Typography variant="subtitle2">{message}</Typography>
      <Typography color="hsla(0,0%,100%,0.6)" variant="caption">
        {time}
      </Typography>
    </Wrapper>
  );
};
