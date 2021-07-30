import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profiles">Profiles</Link></li>
        <li><Link to="/history">History</Link></li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path={['/about', '/info']} component={About}/>
        <Route path="/profiles" component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
        <Route
          render={({ location} ) => (
            <div>
              <h2>page not found</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
