import React from 'react'
import scrollToElement from 'scroll-to-element'

import './Navbar.css'

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
            Manuz Cheru.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollToElement("#work")}>Work</button>
            <button onClick={() => scrollToElement("#Resume")}>About</button>
            <button onClick={() => scrollToElement("#Services")}>Services</button>
            <button onClick={() => scrollToElement("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Navbar
