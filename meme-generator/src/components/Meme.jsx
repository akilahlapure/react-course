import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getNewMeme() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length) 
        const url = memeArray[randomNumber].url

        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
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
                <img src={meme.randomImage} alt="Meme Image" />
            </section>
        </main>
    )
}