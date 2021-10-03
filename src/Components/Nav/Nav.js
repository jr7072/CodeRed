import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import {ReportIncidentModal} from '../ReportIncident/ReportIncident';
import {PinToFloorMapModal} from '../PinToFloorMap/PinToFloorMap';
import React from 'react'
<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
import './Nav.css'
import {useState} from 'react'

export const NavigationBar = () => {
<<<<<<< HEAD
=======

    const [incidentModel, setIncidentModel] = useState(
        {
            IncidentName: "",
            Date: 0,
            Time: 0,
            DateTime: 0,
            Employee: "",
            Workplace: "",
            IncidentType: "",
            LocationX: 0,
            LocationY: 0,
        }
    );
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
    const [showReportModal, setShowReportModal] = useState(false);
    const [showPinToFloorModal, setShowPinToFloorModal] = useState(false); 

    const handleClose = () => {
<<<<<<< HEAD
=======
        setIncidentModel ({
            IncidentName: "",
            Date: 0,
            Time: 0,
            DateTime: 0,
            Employee: "",
            Workplace: "",
            IncidentType: "",
            LocationX: 0,
            LocationY: 0,
        })
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
        setShowReportModal(false);
    }

    const handlePinClose = () => {
<<<<<<< HEAD
=======
        setIncidentModel ({
            IncidentName: "",
            Date: 0,
            Time: 0,
            DateTime: 0,
            Employee: "",
            Workplace: "",
            IncidentType: "",
            LocationX: 0,
            LocationY: 0,
        })
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
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
<<<<<<< HEAD
        console.log("submitted!")
    }
    return(
        <div>
            <Navbar bg="light" expand="lg">
=======
        axios
        .post("http://localhost:5000/incident/add", incidentModel)
        .then((res) => console.log(res.data));
    }

    const handleOnChange = (formName, formValue) => {
        if(formName == "formIncidentName")
        {
            setIncidentModel(prevState => ({
                ...prevState,
                IncidentName: formValue
            }))
        }
        else if(formName == "formDate")
        {
            setIncidentModel(prevState => ({
                ...prevState,
                Date: formValue
            }))
        }
        else if(formName == "formTime")
        {
            setIncidentModel(prevState => ({
                ...prevState,
                Time: formValue
            }))
        }
        else if(formName == "formWorkplace")
        {
            setIncidentModel(prevState => ({
                ...prevState,
                Workplace: formValue
            }))
        }
        else if(formName == "formEmployeeName")
        {
            setIncidentModel(prevState => ({
                ...prevState,
                Employee: formValue
            }))
        }
        else if(formName == "formIncidentType")
        {
            setIncidentModel(prevState => ({
                ...prevState,
                IncidentType: formValue
            }))
        }
        else if(formName == "Location")
        {
            setIncidentModel(prevState => ({
                ...prevState,
                LocationX: formValue.left,
                LocationY: formValue.top
            }))
        }

    }

    return(
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
                <Container>
                    <Navbar.Brand href="#home">Safety Shark</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
<<<<<<< HEAD
                        <Button variant="primary" onClick={handleShow}>Report Incident</Button>
                        <Nav.Link href="/incidentReport">Incident Report</Nav.Link>
                        <Nav.Link href="/heatmap">Heatmap</Nav.Link>
                        <Nav.Link href="/FloorPlan">New Location</Nav.Link>
=======
                        <Nav.Link href="/incidentReport">Incident Report</Nav.Link>
                        <Nav.Link href="/heatmap">Heatmap</Nav.Link>
                        <Nav.Link href="/training">Training</Nav.Link>
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/action/3.1">Heatmap</NavDropdown.Item>
                        <NavDropdown.Item href="/action/3.2">Training</NavDropdown.Item>
                        <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
<<<<<<< HEAD
=======
                        <Button variant="primary" onClick={handleShow}>Report Incident</Button>
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
<<<<<<< HEAD
            <ReportIncidentModal show = {showReportModal} onHide = {handleClose} onNext = {handleNext}/>
            <PinToFloorMapModal show = {showPinToFloorModal} onHide = {handlePinClose} onSubmit = {handleSubmit}/>
        </div>

        
=======
            <ReportIncidentModal show = {showReportModal} onHide = {handleClose} onNext = {handleNext} onChange = {handleOnChange}/>
            <PinToFloorMapModal show = {showPinToFloorModal} onHide = {handlePinClose} onSubmit = {handleSubmit} onChange = {handleOnChange}/>
        </div>
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
    )
}