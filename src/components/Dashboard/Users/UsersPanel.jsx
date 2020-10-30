import React, {useState,useEffect}from 'react';
import DashNavbar from '../DashNavbar.jsx';
import Axios from 'axios';




function UsersPanel(){
  let url = window.location.href;

  const [state, setState] = useState([]);

  let projectId = url.slice(- 24);

  const projectObject = {
    project_id: projectId
  };

  const  getData = async () =>{
    let projectRes = await Axios.post("http://localhost:5000/users/userprojects", projectObject);
    setState(projectRes.data.users)


  };

  useEffect(() => {
    getData();
  },[])

  return(
    <div>
      <DashNavbar />
      <div className="user-list">
      <h2>Project Users</h2>
      {state.map(function(d, idx){
       return  (
         <li key = {idx} className="list-group-item list-group-item-action" > {d.username}</li>
       )
      })}

      </div>

    </div>

  );
}

export default UsersPanel;
