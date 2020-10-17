import React, {useState, useEffect} from 'react';
import Axios from "axios";
import UserContext from "../context/UserContext.js";
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Features from './Features/Features.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Demo from './Dashboard/Demo/Demo.jsx';
import MainPage from './Dashboard/MainPage/MainPage.jsx';
import TicketInfo from './Dashboard/TicketInfo/TicketInfo.jsx';
import CreateTicket from './Dashboard/CreateTicket/CreateTicket.jsx';
import Profile from './Profile/Profile.jsx';
import CreateProject from './Profile/CreateProject.jsx';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
const [userData, setUserData] = useState({
  token:undefined,
  user: undefined
})

useEffect(() => {
  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenRes = await Axios.post(
      "http://localhost:5000/users/tokenIsValid",
      null,
      { headers: { "x-auth-token": token } }
    );
    if (tokenRes.data) {
      const userRes = await Axios.get("http://localhost:5000/users/", {
        headers: { "x-auth-token": token },
      });
      setUserData({
        token,
        user: userRes.data,
      });
    }
  };

  checkLoggedIn();
}, []);



  return (
    <Router>
      <Switch>
        <UserContext.Provider value = {{userData, setUserData}}>
          <Route path= "/" exact component = {Home} />
          <Route path= "/about" component = {About} />
          <Route path= "/features" component = {Features} />
          <Route path= "/login" component = {Login} />
          <Route path= "/register" component = {Register} />
          <Route path= "/demo" component = {Demo} />
          <Route path= "/profile/:userId"  component = {Profile} />
          <Route path= "/createproject/:userId" component = {CreateProject} />
          <Route path= "/mainpage/:projectId"  component = {MainPage} />
          <Route path= "/createticket/:projectId"component = {CreateTicket} />
          <Route path= "/ticketinformation/:ticketid"component = {TicketInfo} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );

}

export default App;
