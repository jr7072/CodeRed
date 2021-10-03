import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import React from 'react'
import './Nav.css'

export const NavigationBar = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Safety Shark</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#incidentReport">Incident Report</Nav.Link>
                <Nav.Link href="#heatmap">Heatmap</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Heatmap</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Training</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}