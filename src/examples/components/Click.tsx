import React from 'react';

interface Props {
  title?: string;
}

class Click extends React.Component<Props, { toggled: boolean }> {
  static defaultProps = {
    title: 'ahoj',
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      toggled: false,
    };
  }

  // state = {
  //     toggled: false,
  // };

  handleClick = () => {
    this.setState(state => ({ toggled: !state.toggled }));
  };

  // handleClick() {
  //     this.setState(state => ({ toggled: !state.toggled }));
  // }

  render() {
    return (
      <>
        <h2>Click {this.props.title}</h2>
        {this.state.toggled && <p>Jsem zapnutý</p>}
        <button type="button" onClick={this.handleClick}>
          {this.state.toggled && 'On'}
          {this.state.toggled || 'Off'}
        </button>
      </>
    );
  }
}

export default Click;
