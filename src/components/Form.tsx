import React, { useRef } from 'react';
import { Button, Form as ReactStrapForm } from 'reactstrap';
import { InputField } from './InputField';

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
  const nickRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  return (
    <ReactStrapForm onSubmit={onSubmit}>
      <InputField inputRef={nickRef} id="nick" label="Nickname" />
      <InputField inputRef={contentRef} id="content" label="Content" type="textarea" />
      <Button size="lg">Ok</Button>
    </ReactStrapForm>
  );
};
