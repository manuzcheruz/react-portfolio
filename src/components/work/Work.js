import React from 'react'
import Fade from 'react-reveal/Fade'

import './Work.css'

function Work() {
    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="work-I-do-wrapper">
                <Fade bottom>
                    <h1>The work I do,</h1>
                    <h1>and businesses I help.</h1>
                </Fade>
                <Fade bottom>
                    <div className="row-work">
                        <div className="column-work">
                            <div className="work-card">
                                hehe
                            </div>
                        </div>
                        <div className="column-work">
                            <div className="work-card">
                                haha
                            </div>
                        </div>
                        <div className="column-work">
                            <div className="work-card">
                                hihi
                            </div>
                        </div>
                        <div className="column-work">
                            <div className="work-card">
                                hoho
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Work
