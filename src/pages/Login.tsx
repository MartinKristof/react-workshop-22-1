import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { InputField } from '../components/ui/InputField';
import { useAuth } from '../hooks/useAuth';

interface MyFormElements extends HTMLFormControlsCollection {
  nick: HTMLInputElement;
  pass: HTMLInputElement;
}

export interface LoginFormElements extends HTMLFormElement {
  readonly elements: MyFormElements;
}
export const Login = () => {
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const handleSubmit = (event: React.FormEvent<LoginFormElements>) => {
    event.preventDefault();

    const nick = event.currentTarget.elements.nick.value;

    if (logIn(nick)) {
      navigate('/posts');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField id="nick" label="Nickname" placeholder="pepa@novak.com" required />
      <InputField id="pass" label="Password" type="password" required />
      <Button>Log in</Button>
    </Form>
  );
};
