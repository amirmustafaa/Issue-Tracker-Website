import React, { useState }from "react";
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
  Button,
  NavbarText
} from 'reactstrap';

function DemoNavbar(){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return(
    <div>
    <Navbar color="light" light expand="md">
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
          <a href = "/login"><NavbarText className = "LogIn"><Button color="primary">Log Out</Button>{' '}</NavbarText></a>
        </Collapse>
      </Navbar>
    </div>

  );
}

export default DemoNavbar;
