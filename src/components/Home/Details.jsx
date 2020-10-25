import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons'

function Details(){

  return(
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <FontAwesomeIcon className ="text-primary mx-auto" icon={faCheckCircle}  size="4x"/>
              </div>
              <h3>Easy to Use</h3>
              <p className="lead mb-0">Simple and easy to use so you can track issues instantly!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <FontAwesomeIcon className ="text-primary mx-auto" icon={faTasks} size="4x"/>
              </div>
              <h3>Track Your Progress</h3>
              <p className="lead mb-0">Track yor progress from the beginning to the end of your project.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <FontAwesomeIcon className ="text-primary mx-auto" icon={faUserPlus} size="4x" />
              </div>
              <h3>Work Together</h3>
              <p className="lead mb-0">Colaborate with your team and follow along with your projects together. </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}



export default Details;
