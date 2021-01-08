import React from 'react'
import Fade from "react-reveal/Fade"
import data from '../../data'

import './Footer.css'

function Footer() {
    return (
        <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
        <div className="line"></div>
        <div className="icons-email">
          <div className="social-icons">
            {data.social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
        </div>
        </div>
      </div>
    </div>
    )
}

export default Footer
