import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import "./App.css";

class App extends Component {
  render() {
    const name = undefined;
    return (
      <>
        <div className="font-red">{name || "44"} : 123</div>
        <input type="text" />
        <MyComponent>안의내용</MyComponent>
        <Counter/>
        <Say/>
      </>
    );
  }
}

export default App;
