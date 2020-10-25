import React, { useState }from "react";
import Cookies from 'universal-cookie';
import { useHistory} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarText
} from 'reactstrap';
import Logo from '../Home/logo2.png';



function DemoNavbar(){
  const cookies = new Cookies();
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function handleClick(){
    cookies.set("auth-token", "", { path: '/' }, {httpOnly:true});
    history.replace("/");

  }


  return(
    <div>
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img className = "logo" src = {Logo} alt ="logo"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
          </Nav>
          <NavbarText className = "LogIn"><Button onClick = {handleClick} color="primary">Log Out</Button>{' '}</NavbarText>
        </Collapse>
      </Navbar>
    </div>

  );
}

export default DemoNavbar;
