import React from 'react'
import heroImg from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <header>
            <div className="hero-img">
                <img src={heroImg} alt="hero" />
            </div>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind 
                    hosts—all without leaving home.</p>
            </div>
        </header>
    )
}