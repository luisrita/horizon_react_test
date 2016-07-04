import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return(
      <div>
        <p>{this.props.msg.author} : <span>{this.props.msg.text}</span></p>
      </div>
    )
  }
}