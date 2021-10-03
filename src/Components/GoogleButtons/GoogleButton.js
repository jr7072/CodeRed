import React from 'react';
import {GoogleLogin} from  'react-google-login';
import "./GoogleButton.css";
import { Google } from '../../Util/Google/Google';



export const GoogleButton = () => {

    const onAccept = (response) => {

        window.location.href = "http://localhost:3000/home"
    }

    return(
        <GoogleLogin 
            clientId={Google.uri}
            buttonText="Login"
            onSuccess={onAccept}
            onFailure={null}
            cookiePolicy={'single_host_origin'}
            className="google-button"
            isSignedIn={true}
        />
    )
}