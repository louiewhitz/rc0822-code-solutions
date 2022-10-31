import React from 'react';
class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let hide = 'modal hide';
    let menu = 'show';
    if (this.state.isClicked) {
      hide = 'modal';
      menu = 'hide';
    }

    return (
      <div className="main">
        <div className={menu}>
          <i className="fa-solid fa-bars" onClick={this.handleClick}></i>
        </div>
        <div className={hide} onClick={this.handleClick}>
          <div className="display-column">
            <div>
              <h2 onClick={this.handleClick}>Menu</h2>
              <h4 onClick={this.handleClick}>About</h4>
              <h4 onClick={this.handleClick}>Get Started</h4>
              <h4 onClick={this.handleClick}>Sign In</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DrawerComponent;
