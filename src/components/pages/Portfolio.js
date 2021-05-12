import React from 'react';
import '../../App.css';
import Typed from 'react-typed';
import Particles from "react-particles-js";
import introImg from '../../Assets/images/img-intro.jpg';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSoundcloud} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

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
                <h2> Software Engineer</h2>
                <Typed 
                className='typed-text' 
                strings={["Eat()","Code()","Sleep()","Repeat()"]}
                // strings={["Eat();Code();Sleep();Repeat()"]}
                typeSpeed={100}
                backSpeed={10}
                loop
                />
                <div className='icons'>
                    <Link to={{ pathname: "https://www.facebook.com/haibhuvan" }} target="_blank" className='icon-holder'> 
                        <FontAwesomeIcon icon={faFacebook} className='icon-fb'/>
                    </Link>
                    <Link to={{ pathname: "https://github.com/BhuvaneshRavi" }} target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faGithub} className='icon-gh'/>
                    </Link>
                    <Link to={{ pathname: "https://linkedin.com/in/bhuvaneshwaran-ravi-9a5490116" }} target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faLinkedin} className='icon-li'/>
                    </Link>
                    <Link to={{ pathname: "https://soundcloud.com/bhuvaneshwaran-ravi/sets/a-melomaniacs-list" }} target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faSoundcloud} className='icon-sc'/>
                    </Link>
                    <Link to={{ pathname: "https://www.instagram.com/bhuvanesh_ravi" }} target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faInstagram} className='icon-ig'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;