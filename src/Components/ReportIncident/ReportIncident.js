import {Modal, InputGroup, Form, Button} from 'react-bootstrap'
import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import './ReportIncident.css'

export const ReportIncidentModal = (props)=> {

    const handleOnChange = (e) => {
        props.onChange(e.target.id, e.target.value);
    }

    return(
            <Modal show = {props.show} centered>
                <Modal.Header closeButton onHide = {props.onHide}>
                    <Modal.Title>Report Incident</Modal.Title>
                </Modal.Header>

                <Form>
                    <Form.Group className="mb-3" controlId="formIncidentName">
                        <Form.Label>Incident Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter incident name" onChange = {e => handleOnChange(e)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Date" onChange = {e => handleOnChange(e)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" placeholder="Time" onChange = {e => handleOnChange(e)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmployeeName">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee name" onChange = {e => handleOnChange(e)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formWorkplace">
                        <Form.Label>Workplace</Form.Label>
                        <Form.Control type="text" placeholder="Enter Workplace name" onChange = {e => handleOnChange(e)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formIncidentType">
                        <Form.Label>Incident Type</Form.Label>
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