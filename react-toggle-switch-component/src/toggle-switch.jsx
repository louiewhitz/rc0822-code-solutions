import React from 'react';
class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false

    };
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.setState({
      isOn: !this.state.isOn

    });
  }

  render() {
    let text = 'OFF';
    let toggleBox = 'box-off';
    let switchId = 'left';
    if (this.state.isOn) {
      text = 'ON';
      toggleBox = 'box-on';
      switchId = 'right';
      <div className="box">
        <div className={toggleBox}>
          <button id={switchId} onClick={this.handleSwitch}></button>
        </div>
        <p className="display">{text}</p>;
      </div>;
    }
    return (
      <div className="box">
        <div className={toggleBox}>
          <button id={switchId} onClick={this.handleSwitch}></button>
        </div>
        <p className="display">{text}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
