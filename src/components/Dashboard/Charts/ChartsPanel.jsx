import React, {useState,useEffect}from 'react';
import DashNavbar from '../DashNavbar.jsx';
import { Link} from 'react-router-dom';
import Axios from 'axios';
import { PieChart, Pie, Sector, Tooltip } from 'recharts';




function ChartsPanel(){
  const [state, setState] = useState([]);
  let url = window.location.href;
  let projectId = url.slice(url.length - 24);

  const projectObject = {
    project_id: projectId
  };

  const  getIssue = async () =>{
    let projectRes = await Axios.post("http://localhost:5000/users/userProjects", projectObject);
    setState(projectRes.data.issues)
  };
  useEffect(() => {
    getIssue();
  },[])

  let openCount = 0;
  let resolvedCount = 0;

  state.map(function(d, idx){
    if(d.status == 'Open'){
      openCount += 1
    }else{
      resolvedCount +=1
    }


  })
  const data = [
    { name: 'Open', value: openCount }, { name: 'Resolved', value: resolvedCount },
  ];


  return(
    <div>
      <DashNavbar />
      <div className = "pieChart">
        <PieChart width={700} height={600}>
  				<Pie dataKey="value" isAnimationActive={false} data={data} cx={300} cy={300} innerRadius={170} fill="#8884d8" label   />
  				<Tooltip />
  			</PieChart>
      </div>

    </div>

  );
}

export default ChartsPanel;
