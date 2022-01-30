import React from 'react';
import './Singlepost.css';
export default function Singleposts() {
  return (
    <div className="singlepost">
      <div className="singlepostcontainer">
        <img
          className="singlepostimage"
          src="https://images.unsplash.com/photo-1604762525953-2c80447cc4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />

        <h4 className="singleposttitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standh
          <div className="singlepostedit">
           
            <i class="  singleposticon fas fa-user-edit"></i>
            <i class="  singleposticon fas fa-trash"></i>
       
          </div>
        </h4>


<div  className="singlepostinformation">

<span  className="singlepostauthor"> Author:<b> Rajkamal</b></span>
<span  className="singlepostdate"> 1 hr ago</span>

</div>

<p className="singlepostdesc"> 
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</p>



      </div>
    </div>
  );
}
