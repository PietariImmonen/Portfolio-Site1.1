import React from 'react'

export default function ResumeCard(props) {
  return (
    <div className='resumecard'>
        <div className='resumecard--text'>
            <h2>{props.name}</h2>
            <p className='resumecard--textp1'>{props.place}</p>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
