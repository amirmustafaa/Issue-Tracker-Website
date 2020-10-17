import React from 'react';
import DemoSidebar from './DemoSidebar.jsx';
import DemoNavbar from './DemoNavbar.jsx';
import DemoMainPanel from './DemoMainPanel.jsx';

function Demo(){
  return(
    <div className = "flex-container">
      <div className = "flex-side"><DemoSidebar /></div>
      <div className = "flex-main"><DemoMainPanel/></div>
    </div>
  );
}

export default Demo;
