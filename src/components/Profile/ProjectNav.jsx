import React, {useState, useContext} from 'react';
import UserContext from "../../context/UserContext";
import { Link} from 'react-router-dom';

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

function ProjectNav(){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { userData } = useContext(UserContext);


  return(
      <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
            <NavItem>
              <NavLink href="/">Profile</NavLink>
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
          <a href = "#" className = "Create-Project"><NavbarText ><Button color="primary">Search For Project</Button>{' '}</NavbarText></a>
          {userData.user ? (
            <Link to = {"/createproject/" + userData.user.id} className = "Create-Project" >
              <NavbarText ><Button color="primary">Create Project</Button>{' '}</NavbarText>
            </Link>
          ) : (
            <>
            </>
          )}


        </Collapse>
      </Navbar>
    </div>

  )

}

export default ProjectNav;
