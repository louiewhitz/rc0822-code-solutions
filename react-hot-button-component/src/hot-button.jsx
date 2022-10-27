import React from 'react';
// import reactDOM from 'react-dom/client';
class HotBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicks: 0 };
  }

  handleClick() {
    const updateCount = this.state.clicks + 1;
    this.setState({ clicks: updateCount });
  }

  render() {

    if (this.state.clicks < 4) {
      return <button className="btn-blue" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 3 && this.state.clicks < 6) {
      return <button className="btn-purple" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 6 && this.state.clicks < 12) {
      return <button className="btn-pink" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      return <button className="btn-orange" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      return <button className="btn-yellow" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 18 && this.state.clicks < 21) {
      return <button className="btn-white" onClick={this.handleClick}>Hot Button</button>;
    }
  }
}

export default HotBtn;
