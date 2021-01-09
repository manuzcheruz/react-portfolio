import React from 'react'
import Fade from 'react-reveal/Fade'
import Arrow from '../../Utilities/Arrow'

import './CallToAction.css'

function CallToAction() {
    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="cta-wrapper">
                <Fade bottom>
                    <p>Let me know if you want to
                    talk about a potential
                    collaboration. I'm available
                    for freelance work.</p>
                </Fade>
                <Fade left cascade>
                    <h1 className="cta-message">
                        <a href="mailto:kipkemoiemmanuel@icloud.com">
                            Lets create your web app <span className="cta-arrow"><Arrow height={35} /></span>
                        </a> 
                    </h1>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default CallToAction
