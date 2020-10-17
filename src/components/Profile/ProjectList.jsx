import React, {useContext} from 'react';
import UserContext from "../../context/UserContext";



function ProfileList(){
  const {userData} = useContext(UserContext);

  return(


    <div className = "list-group">
        {userData.user ? (
          userData.user.project.map(function(d, idx){
             return  (
               <a href = {"/mainpage/" + d._id}><li className="list-group-item" > {d.name}</li></a>
           );

          })
        ) : (

          <>
          </>
        )}
    </div>

  );
}


export default ProfileList;
