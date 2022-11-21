import React from 'react';
class Dots extends React.Component {
  constructor(props) {
    super(props);
    this.handleDots = this.handleDots.bind(this);
  }

  handleDots(id) {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <i
        className={`${this.props.class} fa-circle`}
        onClick={this.handleDots}></i>
    );
  }
}
export default Dots;
