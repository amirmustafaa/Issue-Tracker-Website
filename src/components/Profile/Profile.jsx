import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/UserContext"
import ProjectNav from './ProjectNav.jsx'
import ProjectList from './ProjectList.jsx'



function Profile(){
const {userData}  = useContext(UserContext);
let history = useHistory();

  return(
    <div>
      <ProjectNav />
      <ProjectList />
    </div>

  );
}

export default Profile;
