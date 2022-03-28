import React from "react"
import { Link } from "react-router-dom";
import {BiFace, BiBookOpen, BiBriefcaseAlt, BiMailSend, BiHomeAlt} from "react-icons/bi"

export default function Navbar(props) {

    const contact = props.lang?"Contact":"Yhteystiedot"
    const resume = props.lang?"Resume":"Ansioluettelo"
    const about = props.lang?"About":"Tietoja"

    const style = {
        color: 'white',
        textDecoration: 'none'
    }

    return(
        <nav className="navbar">
            <div className="nav--container">
                <Link style={style} to="/contact"> 
                    <h3 className="nav--content">{contact}</h3>
                    <BiMailSend className="nav--icon" size="30px"/>
                </Link> 
            </div>
            <div className="nav--container"> 
                <Link style={style} to="/resume">
                    <h3 className="nav--content">{resume}</h3>
                    <BiBookOpen className="nav--icon" size="30px"/>
                </Link> 
            </div>
            <div className="nav--container"> 
                <Link style={style} to="/portfolio"> 
                    <h3 className="nav--content">Portfolio</h3>
                    <BiBriefcaseAlt className="nav--icon" size="30px"/>
                </Link> 
            </div>
            <div className="nav--container">
                <Link style={style} to="/about">
                <h3 className="nav--content">{about}</h3>
                <BiFace className="nav--icon" size="30px"/>
                </Link>
            </div>
            <div className="nav--container">
                <Link style={style} to="/"> 
                <img src="Logo.png" alt="" className="logo"/>
                <BiHomeAlt className="nav--icon1" size="30px"/>
                </Link> 
            </div>
        </nav>
    )
    
}