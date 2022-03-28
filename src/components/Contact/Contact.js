import React from "react";
import {AiFillMail, AiFillPhone} from "react-icons/ai"
import {BsFillMapFill} from "react-icons/bs"

export default function Contact(props) {

    const h4text = props.lang?"Feel free to contact me!":"Älä epäröi ottaa yhteyttä minuun"
    const h1text = props.lang?"Get in Touch":"Ole yhteydessä"
    const conth2 = props.lang?"Contact Info":"Yhteystiedot"
    const contp = props.lang?"Always available for new work offers!":"Aina avoin uusille työtarjouksille!"
    const mail = props.lang?"E-Mail":"Sähköposti"
    const num = props.lang?"Number":"Numero"
    const loc = props.lang?"Location":"Paikkakunta"
    return(
        <div>
                <div className='about--header'>
                <h4 className='about--headerh4'>{h4text}</h4>
                <h1 className='about--headerh1'>{h1text}</h1>
                </div>

                <div className="contact--container">
                    <h2>{conth2}</h2>
                    <p>{contp}</p>
                    <div className="contact--info">
                        <div className="contact--icons">
                        <AiFillMail size="40px"/>
                        <AiFillPhone size="40px"/>
                        <BsFillMapFill size="35px"/>
                        </div>
                        <div className="contact--text">
                            <div className="contact--textzone">
                                <h3>{mail}</h3>
                                <p>pietari.immonen@gmail.com</p>
                                <h3>{num}</h3>
                                <p>+358453122993</p>
                                <h3>{loc}</h3>
                                <p>Helsinki</p>
                            </div>
                        </div> 
                    </div>
                </div>
        </div>
    )
}