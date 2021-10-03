import React from 'react';
import GoogleLogin from  'react-google-login';

import "./GoogleButton.css";

const clientId = "139033022767-4c6ha4fmr7h2nsqhdp5u5sfkdtlajvrc.apps.googleusercontent.com";

export const GoogleButton = () => {

    return(
        <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={null}
            onFailure={null}
            cookiePolicy={'single_host_origin'}
            className="google-button"
        
        />
    )
}