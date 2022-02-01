import React from 'react';

import './Setting.css';
import Sidebar from '../../Sidebar/Sidebar';
export default function Setting() {
  return (
    <div className="setting">
      <div className="settingwrapper">

<div className="settingtitle">
<span className="updatetitle"> Update Your account</span>
<span className="deletetitle"> Delete Your account</span>


</div>


<form className="settingform">
<label> profile picture</label>
<div className="settingpp">
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg" alt=""/>

<label htmlFor="fileInput">

<i className=" settingppicon  fas fa-user"></i>
</label>

<input type="file" id="fileInput"  style={{display:"none"}}/>



  </div>



  <label> Username</label>

  <input type="text" placeholder="Rajkamal"/>
  <label> Email</label>

<input type="emial" placeholder="Rajkamal@gmail.com"/>
<label> Password</label>

<input type="password" placeholder=""/>
<button className="settingupdate">Update</button>
</form>
      </div>
      <Sidebar />
    </div>
  );
}
