import React from 'react';
import GoogleLogin from  'react-google-login';

import "./GoogleButton.css";

const clientId = "139033022767-4c6ha4fmr7h2nsqhdp5u5sfkdtlajvrc.apps.googleusercontent.com";

<<<<<<< HEAD

export const GoogleButton = () => {

    const onSuccess = () => {
        window.location.href = "http://localhost:3000/home";
    }
    
    const onFailure = () => {
        
        console.log("fail");

    }

=======
export const GoogleButton = () => {

>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
    return(
        <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
<<<<<<< HEAD
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            className="google-button"
=======
            onSuccess={null}
            onFailure={null}
            cookiePolicy={'single_host_origin'}
            className="google-button"
        
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
        />
    )
}