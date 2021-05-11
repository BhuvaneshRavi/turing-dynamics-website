import React from 'react';
import '../../App.css';
import Typed from 'react-typed';
import Particles from "react-particles-js"
import introImg from '../../Assets/images/img-intro.jpg'

function Portfolio() {
    // return <h1 className='portfolio'>Portfolio</h1>;
    return (<div className="portfolio">
        <Particles 
            className='particles-canvas'
            width="100%"
            height="100%"
            params={{
                Particles:{
                    number: {
                        value: 100,
                        density: {
                            enable:true,
                            value_area: 1200
                        }
                    },
                   shape: {
                       type: "circle",
                       stroke: {
                        width: 6,
                        color: "#f9ab00"
                       }
                   } 
                }
            }}            
        />
        <div className="intro">
            <div className="introLeft">
                <div className="imgContainer">
                    <img src={introImg} alt=""/>
                </div>
            </div>
            <div className="introRight">
                <h2> Hi there, I'm </h2>
                <h1>Bhuvaneshwaran Ravi</h1>
                <h2> Software Developer</h2>
                <Typed 
                className='typed-text' 
                strings={["Eat()","Code()","Sleep()","Repeat()"]}
                // strings={["Eat();Code();Sleep();Repeat()"]}
                typeSpeed={100}
                backSpeed={10}
                loop
                />
            </div>
        </div>
    </div>
    )
}

export default Portfolio;