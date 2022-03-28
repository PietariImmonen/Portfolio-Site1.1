import React from "react";
import ResumeCard from "./ResumeCard";

export default function Resume(props) {
    const abh4 = props.lang?"Check out my Resume":"Kurkkaa CV:seni"
    const abh1 = props.lang?"Resume":"CV"
    const weh2 = props.lang?"Work Experience":"Työkokemus"
    const weName1 = props.lang?"Sales Associate":"Myyjä"
    const weText1 = props.lang?"I have been working all around the big supermarket and I know well how the store works"
    :"Olen työskennellyt kaupassa usealla osastolla ja tiedän miten kaupan alan asiat toimivat."
    const edh2 = props.lang?"Education":"Koulutus"
    const edName1 = props.lang?"High school diploma":"Ylioppilastodistus"
    const edText1 = props.lang?"I wrote Long Mathematic, Physics, Chemistry, A-English, A-Swedish and Finnish in matriculation examination"
    :"Kirjoitin ylioppilaskirjoituksissa Pitkän matematiikan, Fysiikan, Kemian, A-englannin, A-ruotsin ja äidinkielen"
    const edName2 = props.lang?"Bachelor of Science Student in Technology":"Tekniikan kandidaatti- opiskelija"
    const edText2 = props.lang?"I'm majoring second year in Information networks and my minor is Computer Science"
    :"Opiskelen toista vuotta Informaatioverkostoja ja sivuaineeni on Tietotekniikka"
    const edPlace2 = props.lang?"Aalto University":"Aalto yliopisto"
    return(
        <div>
            <div className='about--header'>
            <h4 className='about--headerh4'>{abh4}</h4>
            <h1 className='about--headerh1'>{abh1}</h1>
            <div className="education--container">
                <div className="education--cards">
                        <h2 className="resume--h2">{weh2}</h2>
                    <ResumeCard 
                    name={weName1}
                    place="K-Citymarket Jumbo"
                    text={weText1}
                    />
                </div>

                <div className="education--cards">
                        <h2 className="resume--h2">{edh2}</h2>
                    <ResumeCard 
                    name={edName1}
                    place="Helsingin luonnontiedelukio"
                    text={edText1}
                    />
                    <ResumeCard 
                    name={edName2}
                    place={edPlace2}
                    text={edText2}
                    />

                </div>
            </div>
        </div>
        </div>
    )
}