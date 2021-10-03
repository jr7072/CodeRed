import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import {ReportIncidentModal} from '../ReportIncident/ReportIncident';
import React from 'react'
import './Nav.css'
<<<<<<< HEAD
import { GoogleData } from '../../Util/Google/GoogleButton'


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
                <Navbar.Brand >
                    <img src={null} alt="profile"/>
                </Navbar.Brand>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
=======
import {useState} from 'react'

export const NavigationBar = () => {
    const [showReportModal, setShowReportModal] = useState(false);

    const handleClose = () => {
        setShowReportModal(false);
    }

    const handleShow = () => {
        setShowReportModal(true);
    }

    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Safety Shark</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Button variant="primary" onClick={handleShow}>Report Incident</Button>
                        <Nav.Link href="/incidentReport">Incident Report</Nav.Link>
                        <Nav.Link href="/heatmap">Heatmap</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/action/3.1">Heatmap</NavDropdown.Item>
                        <NavDropdown.Item href="/action/3.2">Training</NavDropdown.Item>
                        <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ReportIncidentModal show = {showReportModal} onHide = {handleClose}/>
        </div>

        
>>>>>>> ef9434505715e8e67973ea255274618a6dd5ddfb
    )
}