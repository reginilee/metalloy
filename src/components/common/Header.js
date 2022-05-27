import React from "react";
import logo from "./logo.png";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to="/metalloy">
              <img src={logo} className="navbar-logo" />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/metalloy/company_profile">About Us</Link>
              </Nav.Link>
              {/* <Nav.Link href="#link">Trainer Profile</Nav.Link> */}
              {/* <NavDropdown title="Training Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Module 1: Precision Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Module 2: Plastic Injection Moulding
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Module 3: Sheet Metal Stamping
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Module 4: Semiconductor Assembly Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Module 5: Die Casting Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Module 6: Forging Technology
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Module 7: Materials Engineering
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link>
                <Link to="/MIST">Training Course</Link>
              </Nav.Link>
              {/* <Nav.Link href="#link">Events</Nav.Link> */}
              <Nav.Link>
                <Link to="/faq">FAQ</Link>
              </Nav.Link>
              <Nav.Link>Contact Us</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
