import React, {useContext} from 'react';
import UserContext from "../../context/UserContext";



function ProfileList(){
  const {userData} = useContext(UserContext);

  return(

    <div>
      <h2 className = "profile-heading"> Your Projects</h2>
      <div className = "list-group">
          {userData.user ? (
            userData.user.project.map(function(d, idx){
               return  (
                 <a key = {idx} href = {"/mainpage/" + d._id}><li key = {idx} className="list-group-item list-group-item-action profile-list" > {d.name}</li></a>
             );

            })
          ) : (

            <>
            </>
          )}
      </div>
    </div>
  );
}


export default ProfileList;
