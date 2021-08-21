import React from 'react';
import '../App.css';
import { Button } from './button';
import './Home.css';


function LandingPage() {
    return (
        <div className='hero-container'>
            <h1 className="landing-heading">Danni Wilton</h1>
            <p>Full Stack Web Developer</p>
            
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Contact</Button>
            </div> 
            
        </div>
        

    )
}

export default LandingPage
