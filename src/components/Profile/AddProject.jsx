import React, {useState, useContext} from 'react';
import UserContext from "../../context/UserContext";
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


function AddProject(){

  const {userData} = useContext(UserContext);
  let history = useHistory();

  const [state, setState] = useState({
    projectName: "",
    code: ""

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

    const projectObject = {
      projectName: state.projectName,
      code: state.code,
      user_id: userData.user.id

    };

    const projectRes = await  Axios.post("http://localhost:5000/users/addProject", projectObject);

    history.push("/profile/" + userData.user.id);
  };

  return(
    <div>
      <form className="text-center border border-light p-5" action="#!">

        <p className="h4 mb-4">Enter Project Name</p>

        <input name = "projectName" onChange = {handleChange} type="text" value = {state.projectName}  className="form-control mb-4" placeholder="Project Name"/>


        <input name = "code" onChange = {handleChange} type="password" value = {state.code} className="form-control mb-4" placeholder="Project Code"/>

        <button onClick = {handleClick} className="btn btn-info btn-block" type="submit">Add</button>


  </form>

    </div>

  );

}

export default AddProject;
