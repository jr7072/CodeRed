import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Landing} from "../../Pages/Landing/Landing";
import "./Landing.css";

export const LandingComponent = () => {

    return(
        <Landing />        
    )
}
