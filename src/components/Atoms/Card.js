import React from "react"

import './Card.css'

const Card = ({ heading, paragraph, imgUrl, projectLink, loader }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${imgUrl})`,
          borderRadius: '5px'
      }}
    >
      {loader? loader : 
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
      </div>}
    </div>
  )
}

export default Card
