import React, {useState, useEffect, useContext}from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../../context/UserContext"
import DashNavbar from '../DashNavbar.jsx';
import { Link} from 'react-router-dom';
import Axios from 'axios';


function TicketInfo(){
  let history = useHistory();
  const {userData} = useContext(UserContext);


  const [name, setName] = useState();
  const [assigned, setAssigned] = useState();
  const [severity, setSeverity] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();


  let url = window.location.href;
  let url2 = url.slice(-49);
  let issueId = url2.slice(0,24);
  let projectId = url.slice(-24);


  const  getData = async () =>{

    const ticketObject = {
      ticket_id: issueId
    };

    let ticketRes = await Axios.post("http://localhost:5000/users/ticketInformation", ticketObject);
    setName(ticketRes.data.name);
    setAssigned(ticketRes.data.assigned);
    setSeverity(ticketRes.data.severity);
    setDate(ticketRes.data.date);
    setDescription(ticketRes.data.description);


    };

  const  handleClick = async (event) =>{
    event.preventDefault();
    const updateObject = {
      issueId: issueId,
      projectId: projectId,
      userId: userData.user.id
    }

    let ticketRes = await Axios.post("http://localhost:5000/users/updateTicket", updateObject);

    if (ticketRes.data == "You are not a Admin on this Project."){
      alert("You are not an Admin on this Project.")
    }else{
      history.push("/mainpage/" + projectId);
    }


  };

  useEffect(() => {
    getData();
  },[])


  return(
    <div>
      <DashNavbar />
      <form class="text-center border border-light p-5" action="#!">

          <p class="h4 mb-4">Ticket Information</p>

          <input name = "name"   type="text"  class="form-control mb-4" readonly = "readonly" placeholder={"Name: " +name}/>

          <input name = "assigned"   type="text"  class="form-control mb-4" readonly = "readonly" placeholder={"Assigned User: " + assigned}/>

          <input name = "severity"   type="text"  class="form-control mb-4" readonly = "readonly" placeholder={"Severity: " + severity}/>

          <input name = "date"   type="text"  class="form-control mb-4" readonly = "readonly" placeholder={"Date Created: "+ date}/>

          <div class="form-group">
              <textarea name = "description"  readonly = "readonly" class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder= {"Description: " + description}></textarea>
          </div>

          <button  onClick= {handleClick} class="btn btn-info btn-block" >Resolve Ticket</button>

      </form>
    </div>
  );
}

export default TicketInfo;
