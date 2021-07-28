import React, { Component } from "react";

interface isState {
  number: number;
}

class Counter extends Component<any, isState> {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>not changed {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log('setState 호출');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
