const React = require('react');
const { Component } = require('react');

class DumbComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newMood = this.state.mood == 'happy' ? 'sad' : 'happy';
    this.setState({ mood: newMood });
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

module.exports = DumbComponent;
