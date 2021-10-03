import React from 'react';

export const Home = ({user}) => {

    return(
        <div className="home">
            <div className="greeting">
                {user ? <h2>Hello, {user}</h2>: <h2>Hello, user!</h2>}
            </div>
        </div>
    )
}