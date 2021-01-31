import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from "./Home";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

function Login() {

  const history = useHistory();

  const  signup=(res)=> {
        const googleresponse = {
          Name: res.profileObj.name,
          email: res.profileObj.email,
          token: res.googleId,
          Image: res.profileObj.imageUrl,
          ProviderId: 'Google'
        };
        console.log("response data:",googleresponse);
        console.log("response nae:",googleresponse.Name);
        sessionStorage.setItem("userData", googleresponse.Name);
        //this.props.history.push('/Home')
        history.push({
          pathname:  "/Home",
          
       });
       // debugger;
      // axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleresponse)
      //   .then((result) => {
      //     let responseJson = result;
      //     sessionStorage.setItem("userData", JSON.stringify());
      //     this.props.history.push('/Home')
      // });
      }

  const responseGoogle = (response) => {
          console.log(response);
          var res = response.profileObj;
          console.log(res);
          signup(response);
        }
  return (
    <div className="App">
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Login With Google Using ReactJS
            </div>
        </div>
        <div className="row">
          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <GoogleLogin
                clientId="926588660070-bmb7vjmkflc5v96avtu8a32slrm4npbe.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} ></GoogleLogin>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
  );
}

export default Login;
