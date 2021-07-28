import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message : '',
    username: ''
  }
  
  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleClick = () => {
    console.log(this.state.username+' : '+this.state.message);
    this.setState({
      message: '',
      username: ''
    });
  }
  handleKeyPress = (e: any) => {
    if(e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>Event</h1>
        <h2>{this.state.message}</h2>
        <input 
          type="text"
          name="message"
          placeholder="input text anything"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          name="username"
          placeholder="input text anything"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;