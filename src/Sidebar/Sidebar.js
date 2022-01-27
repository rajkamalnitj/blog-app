import React from 'react'
import "./Sidebar.css"
export default function Sidebar() {
 return (

<div  className="sidebar">
  <div className="sidebarItem">
    <span className="sidebarTitle"> about me</span>
    <img  className="sidebarimage"  src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....... </p>
    </div>
<div className="sidebarItem">
<span className="sidebarTitle">CATEGORIES</span>
<ul className="sidebarlist">
  <li className="sidebarlistitem">life</li>
  <li className="sidebarlistitem">music</li>
  <li className="sidebarlistitem">style</li>
  <li className="sidebarlistitem">sport</li>
  <li className="sidebarlistitem">tech</li>
  <li className="sidebarlistitem">cinema</li>

  </ul>
  </div>

<div className="sidebarItem"> 
<span className="sidebarTitle">FOLLOW US</span>


<div className="sidebarsocial">
  
<i className=" sidebarIcon  fab fa-facebook-square"></i>
<i className="   sidebarIcon  fab fa-pinterest-square"></i>
<i className=" sidebarIcon  fab fa-twitter-square"></i>
<i className=" sidebarIcon fab fa-instagram"></i>
  </div>

</div>


  </div>

 )
}