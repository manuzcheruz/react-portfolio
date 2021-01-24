import React from "react"
import Aux from "../../hoc/Aux"

import './Card.css'

const Card = ({ heading, videoUrl, loader }) => {
  return (
    <div
      className="card"
    >
      {loader? loader : 
      <Aux>
        <video controls
          src={videoUrl}>
        </video>
        <div className="footer">
          {heading} - demo
        </div>
      </Aux>
      }
    </div>
  )
}

export default Card
