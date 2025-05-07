import React from "react";
import { Link } from "react-router-dom";
import { GiCoffeeCup } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import "./login.css";

const Login = () => {
  return (
    <div className="back">
      <div className="container">
        <h1 className='log'> <GiCoffeeCup /> Coffee Blog</h1>
        <div className="box1">
          <label className="user">Username :</label>
          <input type="text" placeholder="user" />
        </div>
        <div>
          <label className="pass">Password :</label>
          <input type="password" placeholder="password" />
        </div>
        <Button className="button1" type="log-in">Log in</Button>
        <h5 className="or-within">Or signup within this account</h5>
        <Link to="/signup" >
          <Button className="button1" type="sign-up">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
