import React from 'react';
import Sidebar from '../Sidebar.jsx';
import ChartsPanel from './ChartsPanel.jsx';

function Charts(){
  return(
    <div className = "flex-container">
      <div className = "flex-side"><Sidebar /></div>
      <div className = "flex-main"><ChartsPanel/></div>
    </div>
  );
}

export default Charts;
