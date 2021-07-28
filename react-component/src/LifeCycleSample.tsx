import React, { Component } from 'react';

interface Props {
  color: any;
  missing: any;
}

class LifeCycleSample extends Component<Props> {
  state = {
    number : 0,
    color: null,
  }
  myRef: any;

  constructor(props:any){
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps:any, prevState:any) {
    console.log('getDerivedStateFromProps');
    if(nextProps.color !== prevState.color){
      return { color: nextProps.color};
    }
    return null;
  }
  
  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log('componentDidUpdate',prevProps, prevState);
    if(prevProps.color !== this.props.color){
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log('componentDidUpdate',prevProps,prevState);
    if(snapshot) {
      console.log('업데이트되기 직전 생상:',snapshot);
    }
  }


  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => this.myRef=ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;