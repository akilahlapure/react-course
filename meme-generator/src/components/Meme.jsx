import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    function getNewMeme() {
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length) 
        const url = memeArray[randomNumber].url

        console.log(url)
    }

    return (
        <section>
            <div className="form">
                <div className="input-text">
                    <input type="text" placeholder="Shut Up"/>
                    <input type="text" placeholder="and take my money"/>
                </div>
                <button className="input-submit" type="submit" onClick={getNewMeme}>
                    <p>Get a New Meme Image 🖼</p>
                </button>
            </div>
        </section>
    )
}