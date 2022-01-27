import React from "react";
  import "./Home.css"
   import Header from "../../Header/Header"
   import Post from "../../Post/Posts"
   import Sidebar from "../../Sidebar/Sidebar"
 export default function Home () {
  return(

    <>
    <Header/>
  <div className="Home">
    
      <Post/>
     <Sidebar/>

  </div>

  </>
    )


}
