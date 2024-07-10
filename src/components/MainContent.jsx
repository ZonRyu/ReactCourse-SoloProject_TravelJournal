import { useState } from "react"
import locationLogo from '../assets/location.png'

export default function MainContent(props) {
    return (
        <div className="box">

            <div className="card">
                <div className="cover--image">
                    <img src={`../assets/${props.image}`} alt="" />
                </div>
                <div className="info--section">
                    <div className="location d-flex">
                        <div className="country d-flex">
                            <img src={locationLogo} alt="" />
                            <p>{props.location}</p>
                        </div>
                        <a href="#">View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <h3>{props.time}</h3>
                    <p className="description">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}