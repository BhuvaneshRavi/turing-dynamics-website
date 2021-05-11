import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            {/* <video src= '' autoPlay loop muted/> */}
            <h1>Zone Under Construction</h1>
            <div className="hero-bins">
                <Button 
                className='bins' 
                buttonStyle='btn--outline--dark'
                buttonSize='btn--large'
                url = '/'>
                    Do Not Press this Button
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
