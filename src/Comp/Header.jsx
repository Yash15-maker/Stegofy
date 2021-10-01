import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="Ctag.png" alt="Logo-png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ marginRight: "30px" ,marginLeft: "80px"}}>
              <Nav.Link href="#features" style={{color: "black"}}><strong>Features</strong></Nav.Link>
              <Nav.Link href="#pricing" style={{color: "black"}}><strong>Pricing</strong></Nav.Link>
              <Nav.Link href="#Yusuf" style={{color: "black"}}><strong style={{fontsize: "20px"}}>Home</strong></Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>

        <Button
          style={{ marginRight: "10px", width: "25%", height: "25%" }}
          href="#deets"
        >
          More deets
        </Button>
        <Button
          eventKey={2}
          href="#memes"
          style={{ width: "25%", height: "25%" }}
        >
          Dank memes
        </Button>
      </Navbar>
    </div>
  );
}
