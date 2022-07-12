import React, { ReactNode, RefObject } from 'react';

const Button = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => (
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
