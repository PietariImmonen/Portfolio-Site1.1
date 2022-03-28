import React from 'react'

export default function Abouttext(props) {

  const h4text = props.lang?"Get to know me":"Tutustu minuun"
  const abh3 = props.lang?"Who am I?":"Kuka olen?"
  const abh2 = props.lang?"I'm Pietari Immonen, an Information networks student and Web Developer"
  :"Olen Pietari Immonen, Informaatioverkostojen opiskelija ja samalla nettisivujen rakentaja"
  const abp = (props.lang?"I'm studying my second year at Aalto University. My first year I studied Computer Science, but in my second year I changed my major to Information Networks. I'm very passionate about Web design and I'm coding almost every day in my free time. I tend to use React, JavaScript and Css in my projects.":
  "Olen toisen vuoden opiskelija Aalto yliopistossa. Ensimmäisenä vuotena opiskelin Tietotekniikkaa, mutta toisen vuoden alussa vaihdoin opiskelemaan Informaatioverkostoja. Olen erittäin kiinnostunut Web-suunnittelusta ja -koodaamisesta. Harrastankin sitä lähes joka päivä vapaa-ajallani. Käytän projekteihini Reactia, JavaScriptiä ja Css:ää.")
  return (
    <div>
        <div className='about--header'>
            <h4 className='about--headerh4'>{h4text}</h4>
            <h1 className='about--headerh1'>Pietari Immonen</h1>
        </div>


        <div className='about--text'>
            <img src="./pt.jpg" className='about--pic' alt=''/>
                <div className='about--text--text'>
                    <h3 className='about--texth3'>{abh3}</h3>
                    <h2 className='about--texth2'>{abh2}</h2>
                    <p className='about--textp'>{abp}</p>
                </div>
        </div>
        
    </div>
  )
}
