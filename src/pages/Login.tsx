import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { Layout } from '../components/Layout';
import { InputField } from '../components/ui/InputField';
import { TUserContext, UserContext } from '../contexts/UserContext';

interface MyFormElements extends HTMLFormControlsCollection {
  nick: HTMLInputElement;
  pass: HTMLInputElement;
}

export interface LoginFormElements extends HTMLFormElement {
  readonly elements: MyFormElements;
}
export const Login = () => {
  const { setNick } = useContext<TUserContext>(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<LoginFormElements>) => {
    event.preventDefault();

    const nick = event.currentTarget.elements.nick.value;

    setNick(nick);
    navigate('/posts');
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <InputField id="nick" label="Nickname" placeholder="pepa@novak.com" />
        <InputField id="pass" label="Password" type="password" />
        <Button>Log in</Button>
      </Form>
    </Layout>
  );
};
