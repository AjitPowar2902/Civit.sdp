import React from 'react'
import {Button,Form,Nav,Navbar,NavDropdown,Card} from 'react-bootstrap';
 import '../styles/global.scss'
import {Link,useNavigate,Outlet } from "react-router-dom";
import SecondaryButton from './buttons/SecondaryButton';


export default function NavMenu() {

    const navigate =  useNavigate()
    function clksubmit() {
        alert("btnLogout");
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
       

        {/* <Link className='nav-link' to='/dashboard'>Ajit/Amar</Link>
            <NavDropdown title="Anurag" id="basic-nav-dropdown">
            <Link className='nav-link' to='/plotdetail'>Service</Link>
            <Link className='nav-link' to='/raiseservicerequest'>service request</Link>
            
            
            </NavDropdown>
            <Link className='nav-link' to='/main'>Varsha</Link>
            <Link className='nav-link' to='/kmain'>Kunal</Link>
            <Link className='nav-link' to='/amain'>Aarti</Link> */}

       
        {/* <NavDropdown title="My Profile" id="basic-nav-dropdown">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={CivitLogo}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </NavDropdown> */}
        <NavDropdown title="Help" id="basic-nav-dropdown">
        <Link className='nav-link' to='/help'>Help</Link>
        <Link className='nav-link' to='/help1'>customer care</Link>
        </NavDropdown>
      </Nav>
      <div className="text-end ">
       
       <SecondaryButton label={"Logout"} onClick={clksubmit}></SecondaryButton> &nbsp; &nbsp; </div>
    </Navbar.Collapse>

</Navbar>
<Outlet />
{/* <div id="watermark">Designed By Anurag Jain</div> */}
</>
  )
}
