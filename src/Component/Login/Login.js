import React from "react";
import sign from "../../assets/sign.jpg";
import "./login.css";
import search from "../../assets/search.png";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login({ setLoginClicked }) {
  const handleClick = () => {
    setLoginClicked(false);
  };
  return (
    <Router>
      <div className="signIn">
        <div className="jumboImage">
          <img src={sign} alt=""></img>
        </div>
        <div className="SignUp">
          <h1>Get Started</h1>
          <span>
            Create an Account?
            <Link to="/signup" onClick={handleClick}>
              Sign In
            </Link>
          </span>
          <div className="buttonContainer">
            <img src={search} alt="google"></img>
            <button className="google">Log in With Google</button>
          </div>
          <div className="separater">
            <div className="Line"></div>
            <div className="or">
              <span>Or</span>
            </div>
            <div className="Line"></div>
          </div>
        </div>
        <div className="form">
          <div className="fields">
            <label>Username</label>
            <div className="inputContainer">
              <span>
                <MailOutlineIcon />
              </span>
              <input className="input" placeholder="Harry Potter"></input>
            </div>
          </div>
          <div className="fields">
            <label>Password</label>
            <div className="inputContainer">
              <span>
                <LockOutlinedIcon />
              </span>
              <input className="input" type="password"></input>
              <span>
                <VisibilityOffOutlinedIcon />
              </span>
            </div>
          </div>
          <div className="fields">
            <button className="button">Log in</button>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Login;
