import React from 'react';

import Topbar from './Topbar/Topbar';
import Single from './Pages/Single/Single';
import Home from './Pages/Home/Home';
import Write from './Pages/Write/Write';

import Setting from './Pages/Setting/Setting';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import { BrowserRouter as Router,Routes, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Topbar />
      {/* <Single/> */}
      {/* <Write/> */}
      {/* <Setting/> */}
<Home/>
     
    


      
    </Router>
  );
}
