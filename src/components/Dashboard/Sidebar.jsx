import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faColumns, faCog, faUsers, faChartPie} from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';


function Sidebar(){
  const [name, setState] = useState();

  let url = window.location.href;
  let projectId = url.slice(- 24);





  const projectObject = {
    project_id: projectId
  };


  const  getName = async () =>{
    let projectRes = await Axios.post("http://localhost:5000/users/userProjects", projectObject);
    setState(projectRes.data.name);
  };

  useEffect(() => {
    getName();
  },[])

  return(
    <div>
    <ul className="navbar-nav bg-gradient-primary sidebar" id="accordionSidebar">

      <div className="sidebar-brand"><h2>  {name}</h2></div>
      <hr className = "sidebar-divider"/>


      <li className="nav-item sidebar-item">
        <a className="nav-link" href={"/mainpage/" + projectId}>
          <FontAwesomeIcon className ="" icon={faColumns}/>
          <span className = "sidebar-link" >Dashboard</span></a>
      </li>



      <li className="nav-item sidebar-item">
        <a className="nav-link" href= {"/createticket/" + projectId} >
          <FontAwesomeIcon className ="" icon={faCog}/>
          <span className = "sidebar-link">Create Tickets</span>
        </a>
      </li>


      <li className="nav-item sidebar-item">
        <a className="nav-link" href={"/users/" + projectId}>
          <FontAwesomeIcon className ="" icon={faUsers}/>
          <span className = "sidebar-link">Users</span>
        </a>
      </li>


      <li className="nav-item sidebar-item">
        <a className="nav-link " href={"/charts/" + projectId}>
        <FontAwesomeIcon className ="" icon={faChartPie}/>
          <span className = "sidebar-link">Charts</span></a>
      </li>

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    </div>

  );
}

export default Sidebar;
