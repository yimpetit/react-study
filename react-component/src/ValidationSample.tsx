import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  input: any;
  state = {
    password: '',
    clicked: false,
    validated: false,
  }
  
  handleChange = (e: any) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.input.focus();
  }
  
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(ref) => this.input=ref}
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증</button>
      </div>
    )
  }
}

export default ValidationSample;