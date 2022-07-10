import { useRef } from 'react';

const TextInput = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    nameRef.current?.focus();
  };

  return (
    <div>
      <input ref={nameRef} placeholder="name" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default TextInput;
