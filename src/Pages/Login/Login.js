import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Login.css';
import {Link} from "react-router-dom"
export default function Login() {
  return (
    <div className="Login">
         <span><b>Login</b></span>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className=" formwrapper col-md-4">
            <form id="loginform">
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="text-danger form-text"></small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <small
                  id="passworderror"
                  className="text-danger form-text"
                ></small>
              </div>
              <div className=" checkboxeprop form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <div className="BUTTONS">
              <button type="submit" className="btn ">
                Login
              </button>
          
           
               </div>
           
            </form>

            <button type="submit" className="registerbutton" >
              <Link className="link" to="/register">Register</Link>
              </button>
         
          </div>
        </div>
      </div>
    </div>
  );
}
