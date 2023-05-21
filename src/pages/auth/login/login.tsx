import { Button } from '@shared/ui/atoms/button';
import { Input } from '@shared/ui/molecules/input';
import { useState, useCallback } from 'react';
import { styled } from 'styled-components';

type Props = {
  onLogin: (idInstance: string, apiTokenInstance: string) => void;
};

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 100ch;
`;

const LoginWrapper = styled.div`
  display: flex;
  padding: 16px 8px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 2px solid black;
`;

export const Login = ({ onLogin }: Props) => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const onLoginHandler = useCallback(
    () => onLogin(idInstance, apiTokenInstance),
    [idInstance, apiTokenInstance, onLogin],
  );
  return (
    <Wrapper>
      <LoginWrapper>
        <Input
          title="idInstance"
          value={idInstance}
          onChange={value => setIdInstance(value.target.value)}
          autoComplete="on"
        />
        <Input
          title="apiTokenInstance"
          value={apiTokenInstance}
          onChange={value => setApiTokenInstance(value.target.value)}
          autoComplete="on"
        />
        <Button onClick={onLoginHandler}>Войти</Button>
      </LoginWrapper>
    </Wrapper>
  );
};
