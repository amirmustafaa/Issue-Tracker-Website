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
    if(d.status === 'Open'){
      openCount += 1
    }else{
      resolvedCount +=1
    }


  })
  const data = [
    { name: 'Open', value: openCount }, { name: 'Resolved', value: resolvedCount },
  ];


  let lowCount = 0;
  let mediumCount = 0;
  let highCount = 0;

  state.map(function(d, idx){
    if(d.severity === 'Low'){
      lowCount += 1
    }if (d.severity === 'Medium') {
      mediumCount += 1
    }else if (d.severity === 'High') {
      highCount += 1

    }
  })
  const data2 = [
    { name: 'Low', value: lowCount }, { name: 'Medium', value: mediumCount }, { name: 'High', value: highCount },
  ];



  return(
    <div>
      <DashNavbar />
      <div className = "chart-container">
        <div>
          <h2 className = "chart-header">Open/Resolved</h2>
          <div className = "status-chart">

            <PieChart width={600} height={540}>
      				<Pie dataKey="value" isAnimationActive={false} data={data} cx={300} cy={300} innerRadius={120} fill="#8884d8" label   />
      				<Tooltip />
      			</PieChart>
          </div>
        </div>
          <div>
          <h2 className = "chart-header">Severity</h2>
          <div className = "severity-chart">
            <PieChart className = "piechart" width={600} height={540}>
      				<Pie dataKey="value" isAnimationActive={false} data={data2} cx={300} cy={300} innerRadius={120} fill="#ffc936" label   />
      				<Tooltip />
      			</PieChart>
          </div>
        </div>
      </div>

    </div>

  );
}

export default ChartsPanel;
