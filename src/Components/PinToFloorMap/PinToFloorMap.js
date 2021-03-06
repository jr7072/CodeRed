import {Modal, InputGroup, Form, Button} from 'react-bootstrap'
import {React, useState} from 'react'
import ImageMarker from 'react-image-marker';
import { propTypes } from 'react-bootstrap/esm/Image'
import './PinToFloorMap.css'

export const PinToFloorMapModal = (props)=> {

    const [markers, setMarkers] = useState([])

    const handleOnShow = () => {
        setMarkers([]);
    }
    
    const handleonAddMarker = (marker) => {
        setMarkers([marker]);
        props.onChange("Location", marker)
    }

    return(
            <Modal show = {props.show} centered size = 'lg' onShow = {handleOnShow}>
                <Modal.Header closeButton onHide = {props.onHide}>
                    <Modal.Title>Select Location of Incident</Modal.Title>
                </Modal.Header>

                {props.showLocationTwo ?                         <ImageMarker
                        src="https://www.researchgate.net/profile/Mohd-Helmy-Abd-Wahab/publication/4376281/figure/fig4/AS:668479569022981@1536389357051/Overall-plant-layout-plan-unscaled.png"
                        markers={markers}
                        onAddMarker={(marker) => handleonAddMarker(marker)}
                    /> :                         <ImageMarker
                    src="https://rocketlister.com/wp-content/uploads/2019/11/17820-Claremont-2D-Floorplan.jpg"
                    markers={markers}
                    onAddMarker={(marker) => handleonAddMarker(marker)}
                />}
        
                <Modal.Footer>
                    <Button variant="secondary" onClick = {props.onHide}> Close </Button>
                    <Button variant="primary" onClick = {props.onSubmit}> Save </Button>
                </Modal.Footer>
            </Modal>
    )
}