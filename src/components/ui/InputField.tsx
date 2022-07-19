import React, { RefObject } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

type TInputFileType = 'email' | 'text' | 'password' | 'textarea';

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  type?: TInputFileType;
  inputRef?: RefObject<HTMLInputElement>;

  required?: boolean;
}

export const InputField: React.FC<Props> = ({ inputRef, id, label, required, placeholder, type = 'email' }) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <Input innerRef={inputRef} id={id} name={id} placeholder={placeholder} type={type} required={required} />
  </FormGroup>
);
