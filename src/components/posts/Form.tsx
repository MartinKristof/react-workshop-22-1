import React from 'react';
import { Button, Form as ReactStrapForm } from 'reactstrap';
import { useUserContext } from '../../hooks/useUserContext';
import { InputField } from '../ui/InputField';

interface MyFormElements extends HTMLFormControlsCollection {
  nick: HTMLInputElement;
  content: HTMLInputElement;
}

export interface PostFormElements extends HTMLFormElement {
  readonly elements: MyFormElements;
}

interface Props {
  onSubmit: (event: React.FormEvent<PostFormElements>) => void;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const { nick } = useUserContext();

  return (
    <ReactStrapForm onSubmit={onSubmit}>
      {nick ? <h2>Post by: {nick} </h2> : <InputField id="nick" label="Nickname" required />}
      <InputField id="content" label="Content" type="textarea" required />
      <Button size="lg">Ok</Button>
    </ReactStrapForm>
  );
};
