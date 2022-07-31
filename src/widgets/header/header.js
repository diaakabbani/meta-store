import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./header.scss";
import Signup from "../../container/signup/signup";
import Login from "../../container/login/login";
import { Navigate, useNavigate } from "react-router-dom";
import Cart from "../../cart/cart";
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>navigate('/app')}>Meta Store </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  onClick={()=>navigate('/cart')}>Cart</Nav.Link>
            </Nav>
            <Nav className="md-auto">
              <NavDropdown className="me-auto" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={()=>navigate('/login')}>Login</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>navigate('/signup')}>Signup</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
