import React from 'react';

export const HeatMap = ({getPoints, points}) => {

    return(
        <div className="heatmap" >
            <div className="map">
                <h1>Hola bitches</h1>
                <button onClick={getPoints}>get points</button>
                {points.location1.map(item => <h2>Location X: {item[0]}, LocationY: {item[1]}</h2>)}
            </div>
        </div>
    )
}