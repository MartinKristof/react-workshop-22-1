import React from 'react';

class StateClass extends React.PureComponent<unknown, { color: string }> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      color: 'green',
    };
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>React Hooks</h1>
        <button
          onClick={() => {
            this.setState(state => ({ ...state, color: 'red' }));
          }}
        >
          change color to red
        </button>
      </div>
    );
  }
}

export default StateClass;
