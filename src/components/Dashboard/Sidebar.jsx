import React, {useState} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


function Sidebar(){

  let history = useHistory();
  const [name, setState] = useState();

  let url = window.location.href;
  let projectId = url.slice(url.length - 24);





  const projectObject = {
    project_id: projectId
  };


  const  getName = async () =>{
    let projectRes = await Axios.post("http://localhost:5000/users/userProjects", projectObject);
    setState(projectRes.data.name);
  };

getName()

  return(
    <div>
    <ul className="navbar-nav bg-gradient-primary sidebar" id="accordionSidebar">
      <div className="sidebar-brand"><h2>{name}</h2></div>
      <hr className="sidebar-divider my-0"/>


      <li className="nav-item active">
        <a className="nav-link" href={"/mainpage/" + projectId}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>


      <hr className="sidebar-divider"/>


      <li className="nav-item">
        <a className="nav-link collapsed" href= {"/createticket/" + projectId} >
          <i className="fas fa-fw fa-cog"></i>
          <span>Create Tickets</span>
        </a>
      </li>


      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Manage Tickets</span>
        </a>
      </li>


      <hr className="sidebar-divider"/>

      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i className="fas fa-fw fa-folder"></i>
          <span>Users</span>
        </a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span></a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Reports</span></a>
      </li>

      <hr className="sidebar-divider d-none d-md-block"/>

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    </div>

  );
}

export default Sidebar;
