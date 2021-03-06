import React, {useState, useEffect} from 'react';
import Axios from "axios";
import UserContext from "../context/UserContext.js";
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import MainPage from './Dashboard/MainPage/MainPage.jsx';
import TicketInfo from './Dashboard/TicketInfo/TicketInfo.jsx';
import CreateTicket from './Dashboard/CreateTicket/CreateTicket.jsx';
import Users from './Dashboard/Users/Users.jsx';
import Charts from './Dashboard/Charts/Charts.jsx';
import Profile from './Profile/Profile.jsx';
import CreateProject from './Profile/CreateProject.jsx';
import AddProject from './Profile/AddProject.jsx';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';


function App() {
const cookies = new Cookies();


const [userData, setUserData] = useState({
  token:undefined,
  user: undefined
})

useEffect(() => {
  const checkLoggedIn = async () => {
    let token = cookies.get("auth-token");
    if (token === undefined) {
      cookies.set("auth-token", "", { path: '/' }, {httpOnly:true});
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
        <UserContext.Provider value = {{userData, setUserData}}>
          <Switch>
            <Route path= "/" exact component = {Home} />
            <Route path= "/login" component = {Login} />
            <Route path= "/register" component = {Register} />
          </Switch>
          {userData.token ? (
            <Switch>
              <Route path= "/profile/:userId"  component = {Profile} />
              <Route path= "/createproject/:userId" component = {CreateProject} />
              <Route path= "/addproject/:userId" component = {AddProject} />
              <Route path= "/mainpage/:projectId"  component = {MainPage} />
              <Route path= "/createticket/:projectId"component = {CreateTicket} />
              <Route path= "/ticketinformation/:ticketid"component = {TicketInfo} />
              <Route path= "/users/:projectId"component = {Users} />
              <Route path= "/charts/:projectId"component = {Charts} />
            </Switch>

          ) : (


            <>
            </>
          )}
        </UserContext.Provider>
    </Router>


  );

}

export default App;
