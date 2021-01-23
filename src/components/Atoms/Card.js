import React from "react"

import './Card.css'

const Card = ({ heading, videoUrl, loader }) => {
  return (
    <div
      className="card"
    >
      {loader? loader : 
      <iframe title={heading} width="400" height="250"
        src={videoUrl}>
      </iframe>
      }
    </div>
  )
}

export default Card
