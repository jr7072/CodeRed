import React, {useReducer} from 'react';
import { HeatMap } from '../../Pages/HeatMap/HeatMap';

import "./HeatMap.css";
import { data } from '../../Util/Server/ServerData';

const reducer = (state, action) => {
    switch (action.type){
        case 'addPointsLocationOne':
            return {...state, location1: action.payload};
        case 'addPointsLocationTwo':
            return {...state, location2: action.payload};
        default:
            throw new Error();
    }
}

const initialState = {

    location1: [],
    location2: [],
}


export const HeatMapCom = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const getPoints = () => {
        data.getPoints()
        .then(points => {
            dispatch({type:"addPointsLocationOne", payload: points});
        }
        )
    }

    return (

        <HeatMap getPoints={getPoints} points={state}/>

    )
    
}