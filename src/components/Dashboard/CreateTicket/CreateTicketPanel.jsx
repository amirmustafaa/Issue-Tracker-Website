import React, {useState, useContext} from 'react';
import DashNavbar from '../DashNavbar.jsx';
import { useHistory } from 'react-router-dom';
import UserContext from "../../../context/UserContext"
import Axios from 'axios';


function CreateTicketPanel(){
  const {userData} = useContext(UserContext);
  let history = useHistory();

  let url = window.location.href;
  let projectId = url.slice(url.length - 24);

  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let dateStr =  + month + "/" + date + "/" + year;


  const [state, setState] = useState({
    name: "",
    severity: "",
    description: "",
    assigned:"",
  });


    function handleChange(event){
      const value = event.target.value;
      setState({
        ...state,
        [event.target.name]: value
      });
    }


    const  handleClick = async (event) =>{
      event.preventDefault();

      const issueObject = {
        name: state.name,
        severity: state.severity,
        description: state.description,
        status:"Open",
        date: dateStr,
        assigned: state.assigned,
        project_id: projectId
      };

      const issueRes = await  Axios.post("http://localhost:5000/users/createIssue", issueObject);
      history.push("/mainpage/" + projectId);

    };

  return(
    <div>
      <DashNavbar />

      <form class="text-center border border-light p-5" action="#!">

          <p class="h4 mb-4">Create Ticket</p>

          <input name = "name" onChange= {handleChange} value = {state.name} type="text"  class="form-control mb-4" placeholder="Name of Ticket"/>

          <input name = "assigned" onChange= {handleChange} value = {state.assigned} type="text"  class="form-control mb-4" placeholder="Name of User Assigned Ticket"/>

          <select name = "severity" value = {state.severity} onChange= {handleChange} class="browser-default custom-select mb-4">
              <option value="" disabled>Choose Severity</option>
              <option value="High" selected>High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
          </select>

          <div class="form-group">
              <textarea name = "description" onChange= {handleChange} value ={state.description} class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description"></textarea>
          </div>

          <button onClick = {handleClick}  class="btn btn-info btn-block" >Submit</button>

      </form>

    </div>

  );
}

export default CreateTicketPanel;
