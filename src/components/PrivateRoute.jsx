import  React,{useContext} from  "react";
import { Route, Redirect } from  "react-router-dom";
import  isLogin  from './AuthOptions';
import UserContext from "../context/UserContext"

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;
