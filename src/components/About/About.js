import React from "react";
import Abouttext from "./Abouttext";

export default function About(props) {
    return(
        <div>
            <h1><Abouttext lang={props.lang}/></h1>
        </div>
    )
}