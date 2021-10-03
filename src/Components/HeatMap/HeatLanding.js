import React from 'react';
import "./HeatMap.css";
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const HeatLanding = () => {

    return(
        <div className="heat-landing">
            <div className="image">
               
            </div>
            <div className="text-box">

                <h2>PinPoint and Avoid Incidents with Heat Maps.</h2>
                <div className="get-started" >

                    <DropdownButton id="dropdown-basic-button" title="Locations">
                        <Dropdown.Item href="/heatmap/location-1">Location 1</Dropdown.Item>
                        <Dropdown.Item href="/heatmap/location-2">Location 2</Dropdown.Item>
                    </DropdownButton>

                </div>

            </div>
        </div>
    )
}