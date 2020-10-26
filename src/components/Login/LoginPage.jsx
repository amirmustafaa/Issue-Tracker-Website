import React, {useState, useContext} from 'react';
import { useHistory} from 'react-router-dom';
import UserContext from "../../context/UserContext"
import Axios from 'axios';
import Cookies from 'universal-cookie';

function LoginPage(){
  const cookies = new Cookies();
  const {setUserData} = useContext(UserContext);

  let history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(event){
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  const  handleClick = async (event) =>{
    event.preventDefault();

    const userObject = {
      email: state.email,
      password: state.password,
    };

    const loginRes = await  Axios.post("http://localhost:5000/users/login", userObject);

    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user
    })
    cookies.set("auth-token", loginRes.data.token,{ path: '/' }, {httpOnly:true});
    history.replace("/profile/" + loginRes.data.user.id)

  };



  return(
    <div className="container login-page">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin">

                <div className="form-label-group">
                  <input   id="inputEmail" className="form-control" name ="email" onChange = {handleChange} value = {state.email} type="email" placeholder="Email address" required autoFocus/>
                </div>

                <div className="form-label-group">
                  <input name = "password" onChange = {handleChange} value = {state.password} type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                </div>

                <button onClick = {handleClick}  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>

  );
}


export default LoginPage
