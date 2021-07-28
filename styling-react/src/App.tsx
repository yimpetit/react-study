import React from 'react';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <SassComponent />
        <CSSModule />
        <StyledComponent />
      </header>
    </div>
  );
}

export default App;
