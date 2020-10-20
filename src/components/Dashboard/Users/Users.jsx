import React from 'react';
import Sidebar from '../Sidebar.jsx';
import UsersPanel from './UsersPanel.jsx';

function Users(){
  return(
    <div className = "flex-container">
      <div className = "flex-side"><Sidebar /></div>
      <div className = "flex-main"><UsersPanel/></div>
    </div>
  );
}

export default Users;
