import React from 'react';
import GoogleLogin from  'react-google-login';

import "./GoogleButton.css";

const clientId = "bruh";


export const GoogleButton = () => {

    const onSuccess = () => {
        window.location.href = "http://localhost:3000/home";
    }
    
    const onFailure = () => {
        
        console.log("fail");

    }

    return(
        <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            className="google-button"
        />
    )
}