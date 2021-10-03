import React from 'react';
import { GoogleButton } from '../../Util/Google/GoogleButton';

export const Landing = () => {

    return(

        <section className="landing">
        
            <div className="picture">
         
            </div>
            <div className="login-section">
                <div className="login">
                    <h2>Login</h2>
                    <div className="login-input">
                        <GoogleButton />
                    </div>
                </div>
            </div>

        </section>
    )
}