import React from 'react'
import Fade from 'react-reveal/Fade'

import './Header.css'

import me from '../../Assets/me.png'

const header = (props) => {
    return (
        <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade top>
            <div style={{backgroundColor: '#f2f7f7', borderRadius: '50%'}}>
              <img style={{height: '130px'}} src={me} alt="" />
            </div>
            <h2>
              Hi, I'm Kipkemoi 
              <span style={{paddingLeft: '10px'}} role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <div className="first">
                Building Software Systems, <br />
                products, brands, and <br />
                experience
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="heading-more-info">
              <div className="second"><br />
                a <span className="heavy">Fullstack Software Engineer</span> <br />
                specializing in both Front and Back End, <br />
                Responsive Web Design, UI/UX and <br />
                Visual Development.
              </div>
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
