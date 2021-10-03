import React from 'react';
import { CarouselCom } from '../../Components/Carousal/CarouselCom';
export const Home = ({name}) => {

    return(
        <div className="home">
            <div className="greeting">
                {name ? <h2>Hello, {name}</h2>: <h2>Hello, User!</h2>}
            </div>
            <div className="carousel" >
                <CarouselCom />
            </div>
            <div className="home-body">

            </div>
        </div>
    )
}