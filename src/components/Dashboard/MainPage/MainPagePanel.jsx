import React, {useState, useEffect}from 'react';
import DashNavbar from '../DashNavbar.jsx';
import { Link} from 'react-router-dom';
import Axios from 'axios';


function MainPagePanel(){

  const [state, setState] = useState([]);
  let url = window.location.href;
  let projectId = url.slice(url.length - 24);

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
      <h3> Open </h3>
      <div class="list-group">
      {state.map(function(d, idx){
        if(d.status == 'Open'){
       return  (
         <a href = {"/ticketinformation/" + d._id + "/" + projectId}><li className="list-group-item" > {d.name}</li></a>
       )
     }
      })}

      </div>
      <h3> Resolved </h3>
      <div class="list-group">
      {state.map(function(d, idx){
        if(d.status == 'Resolved'){
       return  (
         <a href = {"/ticketinformation/" + d._id + "/" + projectId}><li className="list-group-item" > {d.name}</li></a>
       )
     }
      })}

      </div>
    </div>

  );
}

export default MainPagePanel;
