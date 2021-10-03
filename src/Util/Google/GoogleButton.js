import React from 'react';
import GoogleLogin from  'react-google-login';

import "./GoogleButton.css";

const clientId = "null";

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