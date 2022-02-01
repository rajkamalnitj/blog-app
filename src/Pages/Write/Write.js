import React from 'react';
import './Write.css';

export default function Write() {
  return (
<div className="write">
    <form className="writeform">

    
      <div className ="custom-file">
        <label>
          <i className=" iconstyle fas fa-folder-plus"></i>
        </label>
        <input
          type="file"
          className="custom-file-input"
          id="customFile"
          autofocus={true}
        />
        <label className="custom-file-label" for="customFile"></label>
      </div>

  <div className='writeformgroup'>
      <textarea className="textareawrite">Tell your story...........</textarea>
</div>
<button className="formtsubmit"> publish</button>
</form>
    </div>
 
  );
}
