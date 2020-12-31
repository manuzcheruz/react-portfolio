import React from 'react'
import Fade from 'react-reveal/Fade'

import './Header.css'

const header = (props) => {
    return (
        <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm Kipkemoi
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                Building Software Systems,
              </h1>
              <h1>
                products, brands, and
              </h1>
              <h1>
                experience
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <div className="heading-more-info">
              <h3>
                a <span className="heavy">Fullstack Software Engineer</span> 
              </h3>
              <h3>
                I specialize in both Front End and Back End, 
              </h3>
              <h3>
                Responsive Web Design, UI/UX and
              </h3>
              <h3>
                Visual Development.
              </h3>
            </div>
          </Fade>
          <Fade bottom>
            <a
              href="mailto:kipkemoiemmanuel@icloud.com"
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
    )
}

export default header
