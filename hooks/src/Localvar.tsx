import React, { Component } from 'react';

class Localvar extends Component {
  id:number = 1
  setId = (n:number) => {
    this.id = n;
  }
  printId = () => {
    console.log(this.id);
  }
  render() {
    return (
      <div>
        test component
      </div>
    )
    ;
  }
}

export default Localvar;