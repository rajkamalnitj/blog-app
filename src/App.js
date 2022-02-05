import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Topbar from './Topbar/Topbar';
import Single from './Pages/Single/Single';
import Home from './Pages/Home/Home';
import Write from './Pages/Write/Write';

import Setting from './Pages/Setting/Setting';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
   const user=false;

return (
  <BrowserRouter>
  <Topbar/>
  <Routes>
    <Route exact path="/" element={<Home />} >
      </Route>
    <Route path="/login" element={<Login/>} >

    </Route>
    <Route path="/register" element={<Register/>}>
{/* {user ? <Home/> : <Register/>} */}
    </Route>
    <Route path="/post/:id" element={<Single/>} >
    </Route>

    <Route path="/setting" element={<Setting/>} >
    </Route>
 
    <Route path="/write" element={<Write/>} >
    </Route>
  </Routes>
</BrowserRouter>


  );
}
