import React, { Component } from 'react';
import EventPractice from './EventPractice';
import EventPractice2 from './EventPractice2';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import { render } from '@testing-library/react';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color:'#000000'
  }
  scrollBox: any;

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render(){
    return (
      <>
        <EventPractice/>
        <EventPractice2/>
        <ValidationSample/>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        <IterationSample />
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color={this.state.color} missing='1' />
        </div>
      </>
    );
  }
}

export default App;