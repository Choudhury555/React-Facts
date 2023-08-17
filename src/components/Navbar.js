import React from "react"
import image from "../images/react-icon.png"

export default function Navbar(){
    return(
        <nav>
            <img src={image} className="nav-icon"/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}