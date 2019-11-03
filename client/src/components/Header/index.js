import React from "react";
import {Navbar, Nav} from "react-bootstrap"


function Header() {
  return (

    <Navbar bg="dark" expand="lg">
  <Navbar.Brand  style={{color: "white"}} href="#home">Google Books</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav style={{position:"absolute", right:"50px"}} className="mr-auto">
  
        <Nav.Link  style={{color: "white"}} href="/searchbook">Search</Nav.Link>
        <Nav.Link  style={{color: "white"}} href="/saved">Saved</Nav.Link>
      
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
   
  );
}

export default Header;


