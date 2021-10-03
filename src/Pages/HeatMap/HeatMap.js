import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const HeatMap = ({getPoints, points}) => {

    return(
        <div className="heatmap" >
            <div className="banner">
            <DropdownButton id="dropdown-basic-button" title="Locations">
                <Dropdown.Item href="/heatmap/location-1">Location 1</Dropdown.Item>
                <Dropdown.Item href="/heatmap/location-2">Location 2</Dropdown.Item>
            </DropdownButton>
            </div>
        </div>
    )
}