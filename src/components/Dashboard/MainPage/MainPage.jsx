import React from 'react';
import Sidebar from '../Sidebar.jsx';
import MainPanel from './MainPagePanel.jsx';

function MainPage(){
  return(
    <div className = "flex-container">
      <div className = "flex-side"><Sidebar /></div>
      <div className = "flex-main"><MainPanel/></div>
    </div>
  );
}

export default MainPage;
