import {Modal, InputGroup, Form, Button} from 'react-bootstrap'
import {React, useState} from 'react'
import ImageMarker from 'react-image-marker';
import { propTypes } from 'react-bootstrap/esm/Image'
import './PinToFloorMap.css'

export const PinToFloorMapModal = (props)=> {

    const [markers, setMarkers] = useState([])

    const handleOnImageClick = (e) => {
        console.log(markers)
    }

    const handleOnAddMarker = (marker) => {
        setMarkers([marker])
    }

    
    return(
            <Modal show = {true} centered size = 'lg'>
                <Modal.Header closeButton onHide = {props.onHide}>
                    <Modal.Title>Select Location of Incident</Modal.Title>
                </Modal.Header>

                <ImageMarker
                    src="https://rocketlister.com/wp-content/uploads/2019/11/17820-Claremont-2D-Floorplan.jpg"
                    markers={markers}
                    onAddMarker={(marker) => setMarkers([marker])}
                />
        
                <Modal.Footer>
                    <Button variant="secondary" onClick = {props.onHide}> Close </Button>
                    <Button variant="primary"> Save </Button>
                </Modal.Footer>
            </Modal>
    )
}