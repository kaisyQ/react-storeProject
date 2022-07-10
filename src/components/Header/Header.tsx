import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"


const Header = () => {
    return <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="/">Store</Navbar.Brand>
            <Nav className="me-auto">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/features">Features</NavLink>
                <NavLink className='nav-link' to="/pricing">Pricing</NavLink>
            </Nav>
            <Nav>
                <NavLink className='nav-link' to="/about">About</NavLink>
                <NavLink className='nav-link' to="/login">Log in</NavLink>
            </Nav>
        </Container>
  </Navbar>
}

export default Header