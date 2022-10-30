import React from 'react';
import { topicsArray } from './topics-array';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTopic: null,
      allTopics: topicsArray
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handleClick(event) {
    if (this.state.activeTopic === this.state.textContent) {
      this.setState({ activeTopic: null });
    } else {
      this.setState({ activeTopic: event.target.textContent });
    }
  }

  toggleShow(props) {
    const { allTopics, activeTopic } = this.state;

    return allTopics.map(topic => {
      return (
        <div key={topic.title} className='container'>
          <div onClick={this.handleClick} className='headers'>
            <h2>{topic.title}</h2>
          </div>
          <div className={topic.title === activeTopic ? 'show content' : 'hide'}>
            <p>{topic.text}</p>
          </div>
        </div>
      );
    });
  }

  render() {

    return (<div> {this.toggleShow()}</div>);
  }
}

export default Accordion;
