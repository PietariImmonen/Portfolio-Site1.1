import React from "react"

export default function InfoBox(props) {

    const job = props.lang?"I'm a web developer":"Olen Web-kehittäjä"

    return(
        <div className="heading">
            <h1 className="heading--name">Pietari Immonen</h1>
            <h2 className="heading--job">{job}</h2>
        </div>
    )
}