import React, {useState, useContext} from 'react';
import { useHistory} from 'react-router-dom';
import UserContext from "../../context/UserContext"
import Axios from 'axios';
import Cookies from 'universal-cookie';


function RegisterPage(){
  const cookies = new Cookies();
  const { setUserData } = useContext(UserContext);


  let history = useHistory();

  const [state, setState] = useState({
    username:  "",
    email: "",
    password:"",
    passwordCheck:"",


  });


  function handleChange(event){
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  const  createUser = async (event) =>{
    event.preventDefault();
    const userObject = {
      email: state.email,
      password: state.password,
      passwordCheck: state.passwordCheck,
      username: state.username,
    };
     await Axios.post("http://localhost:5000/users/register", userObject);
     const loginRes = await  Axios.post("http://localhost:5000/users/login", {
      email:state.email,
      password:state.password
    });
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user
    });
    cookies.set("auth-token", loginRes.data.token,{ path: '/' }, {httpOnly:true});
    history.replace("/profile/" + loginRes.data.user.id);
  };

  return(
      <div className="container register-page">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input name ="username" onChange = {handleChange} value = {state.username} type="text" id="inputUsername" className="form-control has-warning"  placeholder="User Name" required/>
                  </div>

                  <div className="form-label-group">
                    <input name ="email" onChange = {handleChange} value = {state.email} type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                  </div>

                  <hr className="my-4"/>

                  <div className="form-label-group">
                    <input name = "password" onChange = {handleChange} value = {state.password} type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                  </div>

                  <div className="form-label-group">
                    <input name = "passwordCheck" onChange = {handleChange} value = {state.passwordCheck} type="password" id="inputPasswordCheck" className="form-control" placeholder=" Confirm Password" required />
                  </div>

                  <button  onClick = {createUser} className="btn btn-lg btn-primary btn-block text-uppercase">Register</button>
                  <hr className="my-4"/>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default RegisterPage;
