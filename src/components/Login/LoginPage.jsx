import React, {useState, useContext} from 'react';
import { useHistory} from 'react-router-dom';
import UserContext from "../../context/UserContext"
import Axios from 'axios';

function LoginPage(){
  const {userData, setUserData} = useContext(UserContext);

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
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/profile/" + loginRes.data.user.id)
  };



  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin">

                <div className="form-label-group">
                  <input name ="email" onChange = {handleChange} value = {state.email} type="email"  id="inputEmail" className="form-control" placeholder="Email address"/>
                </div>

                <div className="form-label-group">
                  <input name = "password" onChange = {handleChange} value = {state.password} type="password" id="inputPassword" className="form-control" placeholder="Password"/>                </div>

                <button onClick = {handleClick}  className="btn btn-lg btn-primary btn-block text-uppercase">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>

  );
}

//<hr className="my-4"/>
//<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
export default LoginPage
