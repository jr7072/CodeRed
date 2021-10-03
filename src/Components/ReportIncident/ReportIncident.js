import {Modal, InputGroup, Form, Button} from 'react-bootstrap'
import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import './ReportIncident.css'

export const ReportIncidentModal = (props)=> {
<<<<<<< HEAD
=======

    const handleOnChange = (e) => {
        props.onChange(e.target.id, e.target.value);
    }

>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
    return(
            <Modal show = {props.show} centered>
                <Modal.Header closeButton onHide = {props.onHide}>
                    <Modal.Title>Report Incident</Modal.Title>
                </Modal.Header>

                <Form>
                    <Form.Group className="mb-3" controlId="formIncidentName">
                        <Form.Label>Incident Name</Form.Label>
<<<<<<< HEAD
                        <Form.Control type="text" placeholder="Enter incident name" />
=======
                        <Form.Control type="text" placeholder="Enter incident name" onChange = {e => handleOnChange(e)}/>
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Date</Form.Label>
<<<<<<< HEAD
                        <Form.Control type="date" placeholder="Date" />
=======
                        <Form.Control type="date" placeholder="Date" onChange = {e => handleOnChange(e)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" placeholder="Time" onChange = {e => handleOnChange(e)}/>
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmployeeName">
                        <Form.Label>Employee Name</Form.Label>
<<<<<<< HEAD
                        <Form.Control type="text" placeholder="Enter Employee name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" placeholder="Time" />
=======
                        <Form.Control type="text" placeholder="Enter Employee name" onChange = {e => handleOnChange(e)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formWorkplace">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Workplace name" onChange = {e => handleOnChange(e)}/>
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formIncidentType">
                        <Form.Label>Incident Type</Form.Label>
<<<<<<< HEAD
                        <Form.Select aria-label="Default select example">
                            <option>Select Incident Type</option>
                            <option value="1">Falls</option>
                            <option value="2">Combustion</option>
                            <option value="3">Struck-By</option>
                            <option value="4">Vehicle Strike</option>
                            <option value="5">Near miss</option>
=======
                        <Form.Select aria-label="Default select example" onChange = {e => handleOnChange(e)}>
                            <option>Select Incident Type</option>
                            <option value="1">Burns</option>
                            <option value="2">Back Injury</option>
                            <option value="3">Chemical Exposure</option>
                            <option value="4">Falls</option>
                            <option value="5">Combustion</option>
                            <option value="6">Crushing</option>
                            <option value="7">Vehicle Strike</option>
                            <option value="8">Near miss</option>
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
                        </Form.Select>
                    </Form.Group>
                </Form>

                <Modal.Footer>
                    <Button variant="secondary" onClick = {props.onHide}> Close </Button>
                    <Button variant="primary" onClick = {props.onNext}> Next </Button>
                </Modal.Footer>
            </Modal>
    )
}