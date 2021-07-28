import React, { useState } from 'react';
import Counter from './Counter';
import CounterReducer from './CounterReducer';
import Info from './Info';
import Average from './Average';
import Localvar from './Localvar';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter/>
      <button onClick={() => {
        setVisible(!visible);
      }}>{visible ? '숨기기' : '보이기'}</button>
      <hr />
      {visible && <Info/>}
      <CounterReducer/>
      <Average/>
      <Localvar/>
    </>
  );
}

export default App;
