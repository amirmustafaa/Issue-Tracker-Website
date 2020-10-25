import React, {useState, useContext} from 'react';
import UserContext from "../../context/UserContext";
import { Link} from 'react-router-dom';
import Logo from '../Home/logo2.png';


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
      <NavbarBrand href="/"><img className = "logo" src = {Logo} alt ="logo"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav profile-nav" navbar>
          </Nav>

          {userData.user ? (
            <Link to = {"/addproject/" + userData.user.id} className = "Create-Project" >
                <NavbarText ><Button color="primary">Add Project</Button>{' '}</NavbarText>
            </Link>
          ) : (
            <>
            </>
          )}

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
