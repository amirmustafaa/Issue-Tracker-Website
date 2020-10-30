import React, {useState, useEffect}from 'react';
import DashNavbar from '../DashNavbar.jsx';
import Axios from 'axios';


function MainPagePanel(){

  const [state, setState] = useState([]);
  let url = window.location.href;
  let projectId = url.slice(- 24);

  const projectObject = {
    project_id: projectId
  };



  const  getIssue = async () =>{
    let projectRes = await Axios.post("http://localhost:5000/users/userProjects", projectObject);
    setState(projectRes.data.issues)

  };
  useEffect(() => {
    getIssue();
  },[])

  return(
    <div>
      <DashNavbar />
      <div className = "flex-container-tickets">
        <div className= "flex-open">
          <h3 className = "ticket-header"> Open </h3>
          <div className="ticket-group">
          {state.map(function(d, idx){
            if(d.status === 'Open'){
           return  (
             <a  key = {idx} href = {"/ticketinformation/" + d._id + "/" + projectId}><li key = {idx} className="list-group-item list-group-item-danger list-group-item-action  ticket-list" > {d.name}</li></a>
           )
         }
          })}

          </div>
        </div>

        <div className= "flex-resolved">
          <h3 className = "ticket-header"> Resolved </h3>
          <div className="ticket-group">
          {state.map(function(d, idx){
            if(d.status === 'Resolved'){
           return  (
             <a key = {idx}  href = {"/ticketinformation/" + d._id + "/" + projectId}><li key = {idx}  className="list-group-item list-group-item-success list-group-item-action ticket-list " > {d.name}</li></a>
           )
         }
          })}

          </div>
        </div>
      </div>
    </div>

  );
}

export default MainPagePanel;
