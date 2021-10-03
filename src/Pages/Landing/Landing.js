import React from 'react';
import { GoogleButton } from '../../Components/GoogleButtons/GoogleButton';

export const Landing = ({handleName}) => {

    return(

        <section className="landing">
        
            <div className="picture">
         
            </div>
            <div className="login-section">
                <div className="login">
                    <h2>Login</h2>
                    <div className="login-input">
                        <GoogleButton handleName={handleName}/>
                    </div>
                </div>
            </div>

        </section>
    )
}