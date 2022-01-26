import React from 'react';

import "./topbar.css"
export default function Topbar() {
  return <div  className='top'>
              
<div className='topLeft'> 

<i className=" topIcon  fab fa-facebook-square"></i>
<i className="   topIcon  fab fa-pinterest-square"></i>
<i className="  topIcon  fab fa-twitter-square"></i>
<i className="  topIcon fab fa-instagram"></i>
</div>
              
<div className='topCenter'>
  <ul className="topList">
    <li  className="topListItem" >HOME</li>
    <li className="topListItem"> ABOUT</li>
    <li className="topListItem"> CONTACT  </li>
    <li className="topListItem"> WRITE </li>
    <li className="topListItem"> LOGOUT  </li>


    </ul>
  
  
   </div>  

<div className='topRight'>
  <img  className="topImg" src="https://picsum.photos/seed/picsum/200/300" alt="" /> 
  <i class="topSearchIcon  fas fa-search-dollar"></i>
   </div>

  </div>

  ;
}
