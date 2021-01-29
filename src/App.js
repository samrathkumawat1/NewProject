import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './Login'
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
       <div className="App">  
         <Router>    
          <div className="container">   
            <Switch>    
              <Route exact path='/' component={Login} ></Route>    
              <Route path='/Home' component={Home} ></Route>     
            </Switch>    
          </div>    
        </Router>    
        </div>  
      );
}

export default App;
