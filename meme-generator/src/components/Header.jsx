import React from 'react'
import imgLogo from '../assets/troll-face.png'

export default function Header() {

    return (
        <header>
            <div className="header--title">
                <img src={imgLogo} />
                <h1>Meme Generator</h1>
            </div>
            <div className="header--project-no">
                <p>React Course - Project 3</p>
            </div>
        </header>
    )
}