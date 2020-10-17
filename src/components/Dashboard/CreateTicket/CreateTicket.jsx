import React from 'react';
import Sidebar from '../Sidebar.jsx';
import CreateTicketPanel from './CreateTicketPanel.jsx';

function CreateTicket(){
  return(
    <div className = "flex-container">
      <div className = "flex-side"><Sidebar /></div>
      <div className = "flex-main"><CreateTicketPanel /></div>
    </div>
  );
}

export default CreateTicket;
