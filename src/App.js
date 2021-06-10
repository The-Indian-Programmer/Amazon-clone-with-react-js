import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const sumit = () => {
    
  }
  return (
    <div className="App">
    
       
      <Router>
      <Header/>
        <Switch>

            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/checkout">  <Checkout/> </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
