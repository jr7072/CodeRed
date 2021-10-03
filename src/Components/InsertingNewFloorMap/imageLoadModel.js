import {Form} from 'react-bootstrap'
import React from 'react'

var mongoose = require('mongoose');

var imageLoad = new mongoose.Schema(
    {
        name: String,
        desciption: String,
        img: {
            data: Buffer,
            contentType: String
        }
    }
);

export default new mongoose.model('Image', imageLoad);

export const FloorPlanAdder = () => {
    return(
        <>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </>
    )
}