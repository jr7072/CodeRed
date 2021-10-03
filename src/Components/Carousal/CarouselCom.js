import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Assets/images/slider1.jpg";
import slider2 from "../../Assets/images/slider2.jpg";
import slider3 from "../../Assets/images/slider3.jpg";
import "./Carousal.css";

const Images = {

    image1: slider1, 
    image2: slider2,
    image3: slider3

}

export const CarouselCom = () => {

    return(

        <Carousel className="carousel-class">
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src={Images.image1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src={Images.image2}
                alt="Second slide"
                />
                 <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Images.image3}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
        
            </Carousel.Item>
        </Carousel>
    )
}