import React, {useState,useEffect}from 'react';
import DashNavbar from '../DashNavbar.jsx';
import { Link} from 'react-router-dom';
import Axios from 'axios';




function UsersPanel(){
  let url = window.location.href;

  const [state, setState] = useState([]);

  let projectId = url.slice(url.length - 24);

  const projectObject = {
    project_id: projectId
  };

  const  getData = async () =>{
    let projectRes = await Axios.post("http://localhost:5000/users/userprojects", projectObject);
    console.log(projectRes.data);
    setState(projectRes.data.users)


  };

  useEffect(() => {
    getData();
  },[])

  return(
    <div>
      <DashNavbar />
      <div class="list-group">
      <h2>Project Users</h2>
      {state.map(function(d, idx){
        //if(d.status == 'issuetest2'){
       return  (
         <li className="list-group-item" > {d.email}</li>
       )
    // }
      })}

      </div>

    </div>

  );
}

export default UsersPanel;
