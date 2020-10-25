import  React from  "react";
import Cookies from 'universal-cookie';



 const isLogin = () => {
    const cookies = new Cookies();
    if (cookies.get("auth-token")) {
        return true;
    }

    return false;
}

export default isLogin
