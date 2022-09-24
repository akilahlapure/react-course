import React from "react"
import image from "../assets/akilah-lapure.jpg"

export default function Info() {
    return (
        <section id="info">
            <img src={image}/>
            <div className="info-details">
                <h1 className="name">Akilah Lapure</h1>
                <p class="title">Web Developer</p>
                <p class="site">github.com/akilahlapure</p>
            </div>
            <div className="buttons">
                <button className="btn btn-email">
                    <i className="fa-solid fa-envelope btn-icon"></i>
                    <p>Email</p>
                </button>
                <button className="btn btn-linkedin">
                    <i className="fa-brands fa-linkedin btn-icon"></i>
                    <p>LinkedIn</p>
                </button>
            </div>
        </section>
    )
}