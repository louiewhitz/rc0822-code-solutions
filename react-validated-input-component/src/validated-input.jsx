import React from 'react';
class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };

    this.tooLittleChar = this.tooLittleChar.bind(this);
  }

  tooLittleChar(event) {
    this.setState({ password: event.target.value });
    const password = event.target.value;
    if (password.length < 7) {
      this.setState({
        password: event.target.value
      });
    }
  }

  render() {
    let text = '';
    let icon = '';
    let color = '';

    if (this.state.password.length === 0) {
      text = 'Please enter a password';
      icon = 'fa-sold fa-x';
      color = 'wrong';
    } else if (
      this.state.password.length < 8
    ) {
      icon = 'fa-sold fa-x';
      color = 'wrong';
      text = 'Please enter up to 8 characters';
    } else {
      text = '';
      icon = 'fa-solid fa-check';
      color = 'correct';
    }

    return (
      <form>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={ this.tooLittleChar }/>
        <i className={icon}></i>
        <p className={color}>{text}</p>
      </form>
    );
  }
}

export default ValidatedInput;
