import {Modal, InputGroup, Form, Button} from 'react-bootstrap'
import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import './ReportIncident.css'

export const ReportIncidentModal = (props)=> {
    return(
            <Modal show = {props.show} centered>
                <Modal.Header closeButton onHide = {props.onHide}>
                    <Modal.Title>Report Incident</Modal.Title>
                </Modal.Header>

                <Form>
                    <Form.Group className="mb-3" controlId="formIncidentName">
                        <Form.Label>Incident Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter incident name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Date" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmployeeName">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" placeholder="Time" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formIncidentType">
                        <Form.Label>Incident Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Incident Type</option>
                            <option value="1">Falls</option>
                            <option value="2">Combustion</option>
                            <option value="3">Struck-By</option>
                            <option value="4">Vehicle Strike</option>
                            <option value="5">Near miss</option>
                        </Form.Select>
                    </Form.Group>
                </Form>

                <Modal.Footer>
                    <Button variant="secondary" onClick = {props.onHide}> Close </Button>
                    <Button variant="primary"> Next </Button>
                </Modal.Footer>
            </Modal>
    )
}