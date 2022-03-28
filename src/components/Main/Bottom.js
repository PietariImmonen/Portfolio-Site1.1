import React from "react"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Bottom(props) {

    const style = {
        color: "white"
    }
    const langText = props.lang ? "Suomeksi" : "Back to English"
    return(
        <div className="bottom">
            <div className="bottom--item">
                <div className="bottom--lang">
                    <h4 className="lang--text" onClick={props.handleClick}>{langText}</h4>
                </div>
            </div>

            <div className="bottom--item">
                <div className="bottom--icons">
                    <Link style = {style}to={{ pathname: "https://www.linkedin.com/in/pietari-immonen-315521221/" }} target="_blank" >
                    <FaLinkedin size="30px"/>
                    </Link>
                    <Link style = {style}to={{ pathname: "https://www.instagram.com/pietariimmonen/" }} target="_blank" >
                    <FaInstagram size="30px"/>
                    </Link>
                    <Link style={style} to="/">
                    <FaGithub size="30px"/>
                    </Link>
                </div>
            </div>
        </div>

    
    )
}