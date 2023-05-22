import { Button } from '@shared/ui/atoms/button';
import { Input } from '@shared/ui/molecules/input';
import { useState } from 'react';
import { styled } from 'styled-components';

type Props = {
  onSubmit: (number: string) => void;
};

const Wrapper = styled.div`
  display: flex;
`;

export const NewChat = ({ onSubmit }: Props) => {
  const [number, setNumber] = useState('');
  return (
    <Wrapper>
      <Input
        placeholder="Number here"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <Button variant="outlined" onClick={() => onSubmit(number)}>
        Click
      </Button>
    </Wrapper>
  );
};
