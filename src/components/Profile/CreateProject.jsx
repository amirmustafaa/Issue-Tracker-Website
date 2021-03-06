import React, {useState, useContext} from 'react';
import ProjectNav from "./ProjectNav.jsx";
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/UserContext"
import Axios from 'axios';

function CreateProject(){
  const {userData} = useContext(UserContext);
  let history = useHistory();

  const [state, setState] = useState({
    name: "",
    description: "",
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
      name: state.name,
      description: state.description,
      code:state.code,
      admin: userData.user.username,
      user_id: userData.user.id
    };

    const projectRes = await  Axios.post("http://localhost:5000/users/createProject", projectObject);

    history.push("/profile/" + userData.user.id);
  };

  return(
    <div>
      <ProjectNav />
      <div className="card">

        <h5 className="card-header info-color white-text text-center py-4">
            <strong>Create Project</strong>
        </h5>

        <div className="card-body px-lg-5">

            <form className="text-center">
                <div className = "create-project" >
                    <input name = "name" value = {state.name} onChange = {handleChange} type="text"  className="form-control" placeholder = "Project Name"/>
                </div>

                <div className="md-form create-project" >
                    <input type="text"  className="form-control" onChange = {handleChange} name = "description" value = {state.description} placeholder = "Description"/>
                </div>

                <div className = "create-project">
                    <input name = "code" value = {state.code} onChange = {handleChange} type="password"  className="form-control" placeholder = "Project Code"/>
                </div>





                <button onClick = {handleClick} className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Create</button>
            </form>


        </div>

      </div>
    </div>

  );
}


export default CreateProject;
