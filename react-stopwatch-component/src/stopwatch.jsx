import React from 'react';

class StopWatchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isTicking: false
      // setInterval(handleInterval, delay)
    };
    this.handleCount = this.handleCount.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
  }

  handleCount() {
    if (!this.state.isTicking) {
      this.setState({ isTicking: true });
      this.myInterval = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    } else {
      this.setState({ isTicking: false });
      clearInterval(this.myInterval);
    }
    // const myInterval = setInterval(this.displayCount, 1000);
    // this.setState({ count: this.count++ });
  }

  resetInterval() {
    if (!this.state.isTicking) {
      this.setState({
        count: 0
      });
    }
  }

  render() {
    let span = this.state.count;
    let button = 'fa-solid fa-play';

    if (this.state.isTicking) {
      button = 'fa-solid fa-pause';
    } else {
      span = this.state.count;
    }
    return (
      <div>
        <button className="circle" onClick={this.resetInterval}>
          <div className="count">
            <span>{span}</span>
          </div>
        </button>
        <i className={button} onClick={this.handleCount}></i>
      </div>
    );
  }
}

export default StopWatchComponent;
