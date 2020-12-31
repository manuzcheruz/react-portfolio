import React from 'react'
import Fade from 'react-reveal/Fade'

import './Clients.css'

import libryo from '../../Assets/libryo.svg'
import sakaajira from '../../Assets/sakaajira.svg'

function Clients() {
    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="work-wrapper">
                <Fade bottom>
                    <h1>Clients</h1>
                </Fade>
                <Fade bottom>
                    <div className="svgs">
                        <img class="filter-grey" alt="sakaajira" src={sakaajira} />
                        <img class="filter-grey" alt="libryo" src={libryo} />
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Clients
