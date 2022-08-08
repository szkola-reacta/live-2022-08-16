import { Component } from 'react';

export class Hello extends Component {

  state = {
    email: '',
  }

  // 1. bind
  // constructor(props) {
  //   super(props);

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ email: event.target.value });
  // }

  handleChange = (event) => {
    // sdkjlsdjfldjlk();
    // throw new Error('oh no!');
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="email">Name</label>
          <input name="email" type="email" onChange={this.handleChange} />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    );
  }
}
