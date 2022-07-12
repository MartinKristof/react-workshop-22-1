import React, { RefObject } from 'react';

class TextInput extends React.PureComponent<unknown> {
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleFocus = () => {
    this.inputRef?.current?.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} placeholder="name" />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    );
  }
}

export default TextInput;
