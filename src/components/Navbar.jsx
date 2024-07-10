import { useState } from "react"
import worldLogo from '../assets/world.png'

export default function Navbar() {
    return(
        <nav className="d-flex">
            <img src={worldLogo} alt="" />
            <h1>my travel journal.</h1>
        </nav>
    )
}