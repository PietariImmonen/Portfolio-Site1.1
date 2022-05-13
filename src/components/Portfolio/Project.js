import React from 'react'
import { Link } from "react-router-dom";

export default function Project(props) {

  const style = {
    color: "white",
    textDecoration: 'none'
}

  return (
    <Link style = {style}to={{ pathname: props.path }} target="_blank">
      <div className='project'>
          <div className='project--img'>
            <img src={props.img} alt="" className="project--img" />
          </div>
          <div className='project--text'>
              <h1>{props.name}</h1>
              <ul>
                  <li>{props.l1}</li>
                  <li>{props.l2}</li>
                  <li>{props.l3}</li>
              </ul>
          </div>
      </div>
    </Link>
  )
}
