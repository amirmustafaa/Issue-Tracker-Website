import React from 'react';
import Sidebar from '../Sidebar.jsx';
import TicketInfoPanel from './TicketInfoPanel.jsx';

function TicketInfo(){
  return(
    <div className = "flex-container">
      <div className = "flex-side"><Sidebar /></div>
      <div className = "flex-main"><TicketInfoPanel /></div>
    </div>
  );
}

export default TicketInfo;
