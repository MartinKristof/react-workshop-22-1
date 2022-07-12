/* eslint-disable max-classes-per-file */
import { Component, PureComponent } from 'react';

class LifeCycles extends Component<unknown, { toggled: boolean }> {
  constructor(props: unknown) {
    super(props);

    console.log('constructor');

    this.state = {
      toggled: false,
    };
  }

  componentDidMount() {
    console.log('did mount');
  }

  // shouldComponentUpdate(props, state) {
  //     console.log(props, state);
  //     console.log('should');

  //     return state.toggled !== this.state.toggled;
  // }

  // shouldComponentUpdate() {
  //     return true;
  // }

  componentDidUpdate() {
    console.log('update');
  }

  componentDidCatch() {
    console.log('catch');
  }

  handleClick = () => {
    this.setState(state => ({ toggled: !state.toggled }));
  };

  render() {
    console.log('render');
    return (
      <div>
        {this.state.toggled && <Comp />}
        <button type="button" onClick={this.handleClick}>
          {this.state.toggled ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

class Comp extends Component {
  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    // throw new Error('I crashed!');

    return <div>hello</div>;
  }
}

export default LifeCycles;
