import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

function Login() {

  const  signup=(res)=> {
        const googleresponse = {
          Name: res.profileObj.name,
          email: res.profileObj.email,
          token: res.googleId,
          Image: res.profileObj.imageUrl,
          ProviderId: 'Google'
        };
        console.log("response data:",googleresponse)
        sessionStorage.setItem("userData", googleresponse);
        this.props.history.push('/Home')
        debugger;
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
          debugger;
          this.signup(response);
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
                clientId="926588660070-rej7sfgdmd4qm5oluvtugvuo8h5nhuek.apps.googleusercontent.com"
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
