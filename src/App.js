import React from 'react';
import {useState} from 'react'; 
import './App.css';
import { Route, Switch } from 'react-router-dom';
import DisplayIngredient from './components/DisplayIngredient';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';


function App() {

  const [searchFor, setSearchFor] = useState('k');

  const setSearchForFunction =(search)=>{
    setSearchFor(search);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={props => <Home {...props} searchFor={searchFor} setSearchForFunction={setSearchForFunction}/>} />
          <Route path="/DisplayIngredient" component={props => <DisplayIngredient {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
