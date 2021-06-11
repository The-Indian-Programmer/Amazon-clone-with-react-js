import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const user = null;
  return (
    <div className="App">
        <Router>
         
          <Switch>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>

            <Route exact path="/">
            <Header />
              <Home />
            </Route>

            <Route exact path="/checkout">
            <Header />
              <Checkout />
            </Route>
            
          </Switch>
        </Router>
       

    </div>
  );
}

export default App;
