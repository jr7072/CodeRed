import React, {useEffect, useState} from 'react';
import "./Maps.css"
import ImageMarker, { Marker } from 'react-image-marker';
import heatMap from '../../Assets/images/heatMap.png';
import {data} from '../../Util/Server/ServerData';

export const Location2 = () =>{

    const [markers, setMarkers] = useState([])
    
    useEffect(() => {
        data.getPoints()
        .then(points => {
                points.forEach(element => {
                    if(element[2] == "location2")
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
            src="https://www.researchgate.net/profile/Mohd-Helmy-Abd-Wahab/publication/4376281/figure/fig4/AS:668479569022981@1536389357051/Overall-plant-layout-plan-unscaled.png"
            markerComponent = {CustomMarker}
            markers={markers}
        />
        </div>


    )
}