import React, {useState}from 'react';
import DashNavbar from '../DashNavbar.jsx';
import { Link} from 'react-router-dom';
import Axios from 'axios';

function TicketInfo(){
  let url = window.location.href;
  let url2 = url.slice(-49);
  let issueId = url2.slice(0,24);
  console.log(issueId)

  return(
    <div>
      <DashNavbar />
      <div class="box box-solid box-primary">Name</div>
    </div>
  );
}

export default TicketInfo;
