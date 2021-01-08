import React from 'react'
import scrollToElement from 'scroll-to-element'

import './Navbar.css'

import Mail from '../../Utilities/Mail'

function Navbar() {
    return (
        <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollToElement("#home")}
            className="name"
            tabIndex={0}
          >
            <span style={{height: '50px', width: '50px', marginRight: '10px'}}>
              <a style={{textAlign: 'center', padding: '20px', borderRadius: '50%', border: '1px solid #f2f7f7'}} className="email-link" href="mailto:kipkemoiemmanuel@icloud.com">
                <Mail width={30} />
              </a>
            </span>
            Kipkemoi Emmanuel.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollToElement("#works")}>Works</button>
            <button onClick={() => scrollToElement("#resume")}>Resume</button>
            <button onClick={() => scrollToElement("#services")}>Services</button>
            <button onClick={() => scrollToElement("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Navbar
