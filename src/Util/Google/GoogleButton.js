import React from 'react';
import GoogleLogin from  'react-google-login';

import "./GoogleButton.css";

const clientId = "139033022767-4c6ha4fmr7h2nsqhdp5u5sfkdtlajvrc.apps.googleusercontent.com";

export const GoogleButton = () => {

    const onAccept = (response) => {

        window.location.href = "http://localhost:3000/home"
    }

    return(
        <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={onAccept}
            onFailure={null}
            cookiePolicy={'single_host_origin'}
            className="google-button"
            isSignedIn={true}
        />
    )
}