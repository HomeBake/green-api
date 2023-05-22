import styled from 'styled-components';

import { Button } from '@shared/ui/atoms/button';
import { Input } from '@shared/ui/molecules/input';
import { useState } from 'react';

type Props = {
  onSubmit: (message: string) => void;
  isSendDisabled: boolean;
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 12px;
  background: rgb(32, 44, 51);
  min-height: 62px;
`;

const StyledInput = styled(Input)`
  color: rgb(209, 215, 219);
  background: rgb(42, 57, 66);
  border: 0px solid;
  padding: 9px 12px;
  margin: 5px 8px;
  width: 95%;
  border-radius: 8px;
`;

export const ConversationPanelFooter = ({
  onSubmit,
  isSendDisabled,
}: Props) => {
  const [message, setMessage] = useState('');
  return (
    <InputWrapper>
      <StyledInput
        placeholder="Введите сообщение"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => {
          setMessage('');
          onSubmit(message);
        }}
        disabled={isSendDisabled}
      >
        {isSendDisabled ? 'wait' : 'Send'}
      </Button>
    </InputWrapper>
  );
};
