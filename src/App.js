import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import DisplayIngredient from './components/DisplayIngredient';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={props => <Home {...props} />} />
          <Route path="/DisplayIngredient" exact component={props => <DisplayIngredient {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
