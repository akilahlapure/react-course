import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")
    
    function getNewMeme() {
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length) 
        const url = memeArray[randomNumber].url

        setMemeImage(url)
    }

    return (
        <main>
            <section className="form">
                <div className="input-text">
                    <input type="text" placeholder="Shut Up"/>
                    <input type="text" placeholder="and take my money"/>
                </div>
                <button className="input-submit" type="submit" onClick={getNewMeme}>
                    <p>Get a New Meme Image 🖼</p>
                </button>
            </section>
            <section className="meme-image">
                <img src={memeImage} alt="Meme Image" />
            </section>
        </main>
    )
}