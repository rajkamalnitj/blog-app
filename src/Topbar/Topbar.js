import React from 'react';
 import {Link} from "react-router-dom"
import "./topbar.css"
export default function Topbar() {

   const user=false;

  return <div  className='top'>
              
<div className='topLeft'> 

<i className=" topIcon  fab fa-facebook-square"></i>
<i className="   topIcon  fab fa-pinterest-square"></i>
<i className="  topIcon  fab fa-twitter-square"></i>
<i className="  topIcon fab fa-instagram"></i>
</div>
              
<div className='topCenter'>
  <ul className="topList">

    <li className="topListItem">
      <Link to='/' style={{color:"inherit",textDecoration:"none"}}>HOME</Link>
      </li>

      <li className="topListItem">
      <Link to='/' style={{color:"inherit",textDecoration:"none"}}>ABOUT</Link>
      </li>


      <li className="topListItem">
      <Link to='/' style={{color:"inherit",textDecoration:"none"}}>CONTACT</Link>
      </li>
      
      <li className="topListItem">
      <Link to='/write' style={{color:"inherit",textDecoration:"none"}}>WRITE</Link>
      </li>
      
      <li className="topListItem">
      {/* <Link to='/' style={{color:"inherit",textDecoration:"none"}}>LOGOUT</Link> */}

      {user &&"LOGOUT"}
      </li>


    </ul>
  
  
   </div>  

<div className='topRight'>

  {
 user ? ( 

<>
  <img  className="topImg" src="https://picsum.photos/seed/picsum/200/300" alt="" /> 
  <i className="topSearchIcon  fas fa-search-dollar"></i>
  </>
    

 ):(
  <ul className="topList">
    <li className="topListItem link">
<Link className="link" to="/login">LOGIN</Link>

</li>
<li className="topListItem link ">
<Link className="link" to="/register">REGSITER</Link>
 </li>
</ul>
 )
 }
   </div>

  </div>

  ;
}
