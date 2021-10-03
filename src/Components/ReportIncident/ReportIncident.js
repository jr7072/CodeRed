import {Modal, InputGroup, Form, Button} from 'react-bootstrap'
import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export const ReportIncidentModal = (props)=> {
    return(
            <Modal show = {props.show} centered>
                <Modal.Header closeButton onHide = {props.onHide}>
                    <Modal.Title>Report Incident</Modal.Title>
                </Modal.Header>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Incident Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter incident name" />
                        <Form.Text className="text-muted">
                        Describe the incident here.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Date Time</Form.Label>
                        <Form.Control type="date" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>idk lol</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                </Form>

                <Modal.Footer>
                    <Button variant="secondary" onClick = {props.onHide}> Close </Button>
                    <Button variant="primary"> Next </Button>
                </Modal.Footer>
            </Modal>
    )
}