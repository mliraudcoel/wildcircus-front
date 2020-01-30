import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} /> 
      </Switch>
    </div>
  );
}

export default App;
