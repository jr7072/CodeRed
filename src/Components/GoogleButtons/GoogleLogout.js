import React from 'react';
import {GoogleLogout} from  'react-google-login';
import "./GoogleButton.css";
import { Google } from '../../Util/Google/Google';

export const GoogleButtonOut = () => {

    const logout = () => {

        window.location.href = "http://localhost:3000/";
    }

    return(
        <GoogleLogout
            clientId={Google.uri}
            buttonText="Logout"
            onLogoutSuccess={logout}
        />
    )
}