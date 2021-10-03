import React, {useEffect, useState} from 'react';
import "./Maps.css"
import ImageMarker, { Marker } from 'react-image-marker';
import heatMap from '../../Assets/images/heatMap.png';
import {data} from '../../Util/Server/ServerData';

export const Location1 = () =>{

    const [markers, setMarkers] = useState([])
    
    useEffect(() => {
        data.getPoints()
        .then(points => {
                points.forEach(element => {
                    if(element[2] == "location1")
                    {
                        var tempVar = {top: element[1], left: element[0]};
                        setMarkers(prev => [...prev, tempVar]);
                    }
                });
            }
        )
    },[])



    const CustomMarker = (props) => {
        return (
            <img className="heatMapIcon" src={heatMap}/>
        );
    };

    return(
        <div className = "sugma">
        <ImageMarker id="something"
            src="https://rocketlister.com/wp-content/uploads/2019/11/17820-Claremont-2D-Floorplan.jpg"
            markerComponent = {CustomMarker}
            markers={markers}
        />
        </div>


    )
}