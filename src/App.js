import React from 'react';

import Topbar from './Topbar/Topbar';
import Single from './Pages/Single/Single';
import Home from './Pages/Home/Home';
import Write from './Pages/Write/Write';

import Setting from './Pages/Setting/Setting';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />


        <Route path="/single" element={<Single/>} />
        <Route path="/write" element={<Write/>} />

        <Route path="/setting" element={<Setting />} />

        <Route path="/Register" element={<Register/>} />
    </Routes>
  </BrowserRouter>



  );
}
