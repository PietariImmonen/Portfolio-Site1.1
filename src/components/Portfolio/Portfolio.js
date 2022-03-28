import React from "react";
import Project from "./Project";

export default function Portfolio(props) {

    const abh4 = props.lang?"Showcasing some of my projects!":"Projektini!"
    return(
        <div>
            <div className='about--header'>
                <h4 className='about--headerh4'>{abh4}</h4>
                <h1 className='about--headerh1'>Portfolio</h1>
            </div>

            <div className="portfolio--project">
                <Project 
                name="Portfolio site"
                l1="React"
                l2="JavaScript"
                l3="Css"
                lang={props.lang}
                img=".//PortSite.PNG"
                />
                
            </div>
        </div>

    )
}