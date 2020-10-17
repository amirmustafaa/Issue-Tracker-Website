import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

import Logo from "./logo2.png";
//import {useAuth0} from '@auth0/auth0-react';


function Heading(){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  //const {user,Logout} = useAuth0();
  return (
    <div>
      <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img className = "logo" src = {Logo} alt ="logo"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/features">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/demo">Demo</NavLink>
            </NavItem>
          </Nav>
          <a href = "/login"><NavbarText className = "LogIn"><Button color="primary">Log In</Button>{' '}</NavbarText></a>
        </Collapse>
      </Navbar>
      </header>
    </div>

  );
}

export default Heading;
