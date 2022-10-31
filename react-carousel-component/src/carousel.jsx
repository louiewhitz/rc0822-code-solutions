import React from 'react';

class Dots extends React.Component {
  constructor(props) {
    super(props);
    this.handleDots = this.handleDots.bind(this);
  }

  handleDots() {
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
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.next = this.next.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 3000);
  }

  resetInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 3000);
  }

  componentDidUpdate() {
    const last = this.props.images.length - 1;
    if (this.state.count > last) {
      this.setState({ count: 0 });
    }
  }

  goRight() {
    const last = this.props.images.length - 1;
    this.state.count > last
      ? this.setState({ count: 0 })
      : this.setState({ count: this.state.count + 1 });

    this.resetInterval();
  }

  goLeft() {
    const last = this.props.images.length - 1;
    this.state.count === 0
      ? this.setState({ count: last })
      : this.setState({ count: this.state.count - 1 });
    this.resetInterval();
  }

  next(index) {
    this.setState({ count: index });
    this.resetInterval();
  }

  render() {
    const dots = this.props.images.map((image, index) => (
      <Dots
        key={index}
        index={index}
        count={this.state.count}
        class={index === this.state.count ? 'fa-solid' : 'fa-regular'}
        onClick={this.next}
      />
    ));
    const allImages = this.props.images.map((image, index) => (
      <img
        key={index}
        src={image.url}
        className={`carousel-img ${
          index === this.state.count ? 'show' : 'hidden'
        }`}
      />
    ));

    return (
      <div className="container">
        <div className="row margin-top position justify-between">
          <i
            className="fa-solid fa-chevron-left fa-5x"
            onClick={this.goLeft}></i>

          <div className="img-container">{allImages}</div>

          <i
            className="fa-solid fa-chevron-right fa-5x"
            onClick={this.goRight}></i>

          <div className="column-full justify-align-center">
            <div className="dot-full-container justify-align-center">
              <div className="dot-container">{dots}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
