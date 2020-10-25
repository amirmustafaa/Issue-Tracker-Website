import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button
} from 'reactstrap';

import Logo from "./logo2.png";


function Heading(){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  //const {user,Logout} = useAuth0();
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img className = "logo" src = {Logo} alt ="logo"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
          </Nav>
          <a className = "logIn" href = "/login"><NavbarText ><Button color="primary">Log In</Button>{' '}</NavbarText></a>
        </Collapse>
      </Navbar>
    </div>

  );
}

export default Heading;
