import React, { ReactNode, RefObject } from 'react';

const Button: React.FC<{ children: ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button type="button" className="btn" onClick={onClick}>
    {children}
  </button>
);

class RefComponent extends React.PureComponent<unknown> {
  ref: RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);

    this.ref = React.createRef<HTMLInputElement>();
  }

  componentDidMount() {
    this.focusTextInput();
  }

  focusTextInput = () => {
    this.ref.current?.focus();
  };

  onClick = () => {
    this.ref.current?.blur();
  };

  render() {
    return (
      <div>
        <h2>Ref</h2>
        <input type="text" ref={this.ref} />
        <Button onClick={this.onClick}>Klikni!</Button>
      </div>
    );
  }
}

export default RefComponent;
