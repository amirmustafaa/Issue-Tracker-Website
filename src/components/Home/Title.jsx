import React from 'react';
import TeamPicture from './title1.png';
import Axios from 'axios';

function Title() {
  return(
    <div className = "row title">
      <div className="col-lg-6">
        <div >
          <h1 className = "big-heading"> The best way to track bugs and collaborate with team members </h1>
          <a href ="/register"><button type="button" className="btn btn-outline-primary get-started-reg">Register</button></a>
          <button type="button" className="btn btn-outline-primary get-started-log">Log In</button>
        </div>
      </div>
      <div className="col-lg-6">
        <img className = "team-img" src = {TeamPicture} alt = "team"/>
      </div>
      <h2 className = "title2"> The only tracker you will ever need. </h2>
    </div>

  );

}

export default Title;
