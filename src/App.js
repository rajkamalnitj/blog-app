import React from 'react';

import Topbar from './Topbar/Topbar';
import Single from './Pages/Single/Single'
import Home from './Pages/Home/Home'
 import Write from './Pages/Write/Write'
 
 import Setting from './Pages/Setting/Setting'

export default function App() {
  return (
    <>
      <Topbar />
      {/* <Single/> */}
      {/* <Write/> */}
      <Setting/>
      </>
  
  );
}
