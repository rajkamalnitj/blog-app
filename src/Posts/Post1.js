import React from 'react'
import "./Post1.css"
export default function Post1() {
 return (

<div  className="post1">
  

<img  className="postimg"  src="https://images.unsplash.com/photo-1604762525953-2c80447cc4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt=""/>

<div className="postinfo">

<div  className="postcats">
<span classname="postcat">music</span>
<span classname="postcat">life</span>
</div>
<span  className="posttitle">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>

<hr/>
<span className="postdate"> 1 hr ago</span>

</div>

<div className="postdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum,</div>
  </div>

 )
}