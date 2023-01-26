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
            <div className="portfolio-container">
                <div className="portfolio--project">
                    <Project 
                    name="Portfolio site"
                    l1="React"
                    l2="JavaScript"
                    l3="Css"
                    lang={props.lang}
                    img="../portsite.jpg"
                    path = "https://github.com/PietariImmonen/Portfolio-Site1.1"
                    />
                </div>

                <div className="portfolio--project">
                    <Project 
                    name="Drinking game"
                    l1="React"
                    l2="JavaScript"
                    l3="AWS Amplify backend"
                    lang={props.lang}
                    img="../drinks.jpg"
                    path = "https://github.com/PietariImmonen/my-drinking-game"
                    />
                </div>

                <div className="portfolio--project">
                    <Project 
                    name="Todo App Mobile"
                    l1="React Native"
                    l2="MongoDB"
                    l3="Node.js/Express.js"
                    lang={props.lang}
                    img="../todoAppReactNative.png"
                    path = "https://github.com/PietariImmonen/React-Native-To-Do-list"
                    />
                </div>

            </div>
        </div>
    )
}