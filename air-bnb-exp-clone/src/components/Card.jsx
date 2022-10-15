import React from 'react'
// import cardImg from '../assets/katie-zaferes.png'
import starImg from '../assets/star.png'

export default function Card(props) {
    let tagText 
    if(props.openSpots === 0) {
        tagText = "SOLD OUT"
    } else if (props.location === "Online") {
        tagText = "ONLINE"
    }
    return (
        <article>
            <div className="card-img-container">
                <img src={`./images/`+props.coverImg} className="card-img"/>
                {tagText && <p className="card-tag">{tagText}</p>}
            </div>
            
            <div className="card-desc-container">
                <div className="desc-rating">
                    <img src={starImg} className="rating-icon"/>
                    <p className="rating">{props.stats.rating}</p>
                    <p className="rating-people">{`(`+props.stats.reviewCount+`)`} · {props.location}</p>
                </div>
                <p className="title">{props.title}</p>
                <p className="price"><strong>From {`$`+props.price}</strong> / person</p>
            </div>
        </article>
    )
}