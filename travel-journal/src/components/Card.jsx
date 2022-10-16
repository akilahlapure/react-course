import React from 'react'

export default function Card(props) {
    return (
        <article>
            <img src={props.imageUrl} className="cover-img" />
            <div className="details">
                <div className="location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p className="text">{props.location}</p>
                    <a className="link" href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="title">{props.title}</h2>
                <h6 className="date">{props.startDate} - {props.endDate}</h6>
                <p className="description">{props.description}</p>
            </div>
        </article>
    )
}