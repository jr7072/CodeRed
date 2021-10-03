import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import {ReportIncidentModal} from '../ReportIncident/ReportIncident';
import {PinToFloorMapModal} from '../PinToFloorMap/PinToFloorMap';
import React from 'react'
import './Nav.css'
import {useState} from 'react'

export const NavigationBar = () => {
    const [showReportModal, setShowReportModal] = useState(false);
    const [showPinToFloorModal, setShowPinToFloorModal] = useState(false); 

    const handleClose = () => {
        setShowReportModal(false);
    }

    const handlePinClose = () => {
        setShowPinToFloorModal(false);
    }

    const handleShow = () => {
        setShowReportModal(true);
    }

    const handleNext = () => {
        setShowReportModal(false);
        setShowPinToFloorModal(true);
    }

    const handleSubmit = () => {
        setShowPinToFloorModal(false);
        console.log("submitted!")
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
                        <Nav.Link href="/FloorPlan">New Location</Nav.Link>
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
            <ReportIncidentModal show = {showReportModal} onHide = {handleClose} onNext = {handleNext}/>
            <PinToFloorMapModal show = {showPinToFloorModal} onHide = {handlePinClose} onSubmit = {handleSubmit}/>
        </div>

        
    )
}