import React from 'react'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
 import '../styles/global.scss'
import {Link,useNavigate,Outlet } from "react-router-dom";
import SecondaryButton from './buttons/SecondaryButton';


export default function NavMenu() {

    const navigate =  useNavigate()
    function clksubmit() {
     navigate('/');
    };


  return (
    <>
    <Navbar expand="lg"  className="bg-body-tertiary box-shadow"  fixed="top"  sticky="top">
    <Navbar.Brand href="#"><img src="/images/CIVIT_Dark_Logo.png" className='pl-2' style={{width:"70%",paddingLeft:'15px'}}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
    className="justify-content-end flex-grow-1 pe-3"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown title="Help" id="basic-nav-dropdown">
        <Link className='nav-link  text-dark' to='/help'>Help</Link>
        <Link className='nav-link  text-dark' to='/help1'>customer care</Link>
        </NavDropdown>
        <NavDropdown title="Manage" id="basic-nav-dropdown">
        <Link className='nav-link text-dark' to='/Profile'>Profile</Link>
        <Link className='nav-link text-dark' to='/PageNotFound'>Page Not Found</Link>
        <Link className='nav-link text-dark' to='/Undermaintenance'>Under Maintenance</Link>
        <Link className='nav-link text-dark' to='/Networkconeection'>Network Coneection</Link>
        <Link className='nav-link text-dark' to='/Servererror'>Server Error</Link>
        </NavDropdown>
      </Nav>
      <div className="text-end ">
       
       <SecondaryButton label={"Logout"} onClick={clksubmit}></SecondaryButton> &nbsp; &nbsp; </div>
    </Navbar.Collapse>

</Navbar>

 

</>
  )
}
