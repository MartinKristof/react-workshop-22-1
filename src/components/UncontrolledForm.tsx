import React, { RefObject } from 'react';

class UncontrolledForm extends React.PureComponent<unknown> {
  fileInput: RefObject<HTMLInputElement>;
  textInput: RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);

    this.fileInput = React.createRef();
    this.textInput = React.createRef();
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.fileInput?.current?.files) {
      alert(`File - ${this.fileInput.current.files[0]?.name}`);
    }

    alert(`Text - ${this.textInput?.current?.value}`);
  };

  render() {
    return (
      <>
        <h2>Uncontrolled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="file">
            Upload file:
            <input id="file" type="file" ref={this.fileInput} />{' '}
          </label>
          <br />
          <input type="text" defaultValue="foo" ref={this.textInput} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default UncontrolledForm;
