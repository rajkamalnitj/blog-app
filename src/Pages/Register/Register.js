import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Register.css';
import {Link} from "react-router-dom"
export default function Register() {
  return (
    <div className="Register">


      <span><b>Register</b></span>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className=" formwrapper col-md-4">
            <form id="Registerform">

            <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="usernameInput"
                  name="usernameInput"
                  aria-describedby="usenameHelp"
                  placeholder="Enter  Username"
                />
                <small id="emailHelp" className="text-danger form-text"></small>
              </div>
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
             
                <button type="submit" className="btn">

                  Register
                </button>
              </div>
            </form>
            <button type="submit" className="registerbutton" >
              <Link className="link" to="/login">LOGIN</Link>
              </button>

          </div>
        </div>
      </div>
    </div>
  );
}
