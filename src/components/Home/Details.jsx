import React from 'react';

function Details(){

  return(
    <div className="row features">
      <div className ="feature-box col-lg-4">
        <i className ="icon fas fa-check-circle fa-4x check"></i>
        <h3 className ="feature-title">Easy to use.</h3>
        <p className="feature_desc">dnf;ljlkfjlajdklfj.</p>
      </div>
      <div className="feature-box col-lg-4">
        <i className="icon fas fa-tasks fa-4x"></i>
        <h3 className="feature-title">Track your progress</h3>
        <p className="feature_desc">fkd'lafkld;kfl';kdl's;kf'l;adskf.</p>
      </div>
      <div className="feature-box col-lg-4">
        <i className="icon fas fa-user-plus fa-4x"></i>
        <h3 className="feature-title">Collaborate with your team.</h3>
        <p className="feature_desc">f'l;df'kdl;s'fk'l;sdk'l;fkla';kdl;l.</p>
      </div>

    </div>

  );
}

export default Details;
