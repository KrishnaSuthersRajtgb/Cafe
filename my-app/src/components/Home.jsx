import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {   
    return( 
        <div >
        <h1 className="ti">Welcome To Namma Cafe</h1>
            <Carousel className="allpic">
                <Carousel.Item>
                    <img className="pic1" src="public/Cafe 4.jpg"  />
                    <Carousel.Caption>
                        <h3 className="head">Coffee – the most important meal of the day</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="pic1" src="public/Cafe 1.jpg"  />
                    <Carousel.Caption>
                        <h3 className="head">Life happens, coffee helps</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="pic1" src="public/Cafe 2.jpg" alt="Second slide" />
                    <Carousel.Caption>
                        <h3 className="head">But first, coffee</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="pic1" src="public/Cafe 3.jpg" alt="Third slide" />
                    <Carousel.Caption>
                        <h3 className="head">Wake up and smell the coffee</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <h3 className="ti2"><button>Click Here!</button></h3> */}
            <Link to="/"> </Link> 
            
        </div>
    );
};

export default Home;
