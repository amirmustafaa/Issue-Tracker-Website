import React from 'react';
//import Axios from 'axios';

function Title() {
  return(
    <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Track bugs, collaborate with team members, and take your project to the next level.</h1>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <div className="col-12 col-md-3 mx-auto">
              <a href= "/register"><button type="submit"className="btn btn-block btn-lg btn-primary">Sign up!</button></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

}

export default Title;
