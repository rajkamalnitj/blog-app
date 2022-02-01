import React from 'react';
import './Write.css';

export default function Write() {
  return (
    <div className="write">


      <img   className="writeimage" src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt=" "/>
      <form className="writeform">
        <div className="custom-file">
          <label htmlFor="fileInput">
            <i className=" iconstyle fas fa-folder-plus"></i>
          </label>
          <input type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label" htmlFor="customFile" />
        </div>

        <div className="writeformgroup">
          <textarea
            className="story"
            name="description"
            placeholder="tell your story"
          />
        </div>
        <button className=" formtsubmit   btn-outline-primary ">publish</button>
      </form>
    </div>
  );
}
