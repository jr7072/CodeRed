import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Pannellum, PannellumVideo } from "pannellum-react";
import wideBoy from '../../Assets/images/wide.jpg'
export const Training = () => {

    return(
        <div>
        <h1>Pannellum React Component</h1>
        <Pannellum
            width="100%"
            height="700px"
            image={wideBoy}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            onLoad={() => {
                console.log("panorama loaded");
            }}
        >
          <Pannellum.Hotspot
            type="info"
            pitch={25}
            yaw={-160}
            text="Jim James Johnson Jones"
            URL="http://localhost:3000/incidentReport/9516548213"
          />
     
          <Pannellum.Hotspot
            type="info"
            pitch={-10}
            yaw={0}
            text="Danger Fast Moving Vehicle"
            URL="http://localhost:3000/incidentReport/1534567586"
          />
        </Pannellum>
     
       
     
        </div>
    )
}