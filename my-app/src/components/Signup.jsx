import React from "react";
import "./signup.css"
const Signup = () => {

  return <div className="total-signup">
  <div className="signup-method">
    <h1 className="signup-name">Signup</h1>
    <h6 className="signup-continue">Sign up to continue</h6>
    <form>
    <div className="form-group">
        <label className="we-never-share" htmlFor="exampleInputPassword1">Name</label>
        <input type="Name" class="form-control" id="exampleInputPassword1" placeholder="Name"/>
      </div>
      <div className="form-group">
        <label className="we-never-share" htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small className="we-never-share" id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label className="we-never-share" htmlFor="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label className="we-never-share" class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <button type="signup-button" class="btn btn-primary">Signup</button>
    </form>
  </div>;
  </div>
};

export default Signup;
