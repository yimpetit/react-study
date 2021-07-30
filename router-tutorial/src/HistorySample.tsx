import React, { Component } from 'react';
import { RouteComponentProps } from "react-router-dom";

class HistorySample extends Component<RouteComponentProps> {

  unblock:any;

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    this.unblock = this.props.history.block('are you sure leave in here?');
  }

  componentWillUnmount() {
    if(this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>Go Back</button>
        <button onClick={this.handleGoHome}>Go Home</button>
      </div>
    );
  }
}

export default HistorySample;