import React from "react";
import Bottom from "./Bottom";
import InfoBox from "./InfoBox";

export default function Home(props) {


    return(
        <div>
            <InfoBox lang={props.lang}/>
            <Bottom handleClick={props.handleClick} lang={props.lang}/>
        </div>
    )
}