import React from 'react'
import Fade from 'react-reveal/Fade'

import './Services.css'

function Services() {
    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="services-wrapper">
                <Fade bottom>
                    <h1>Services</h1>
                </Fade>
                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <div className="serv-card">
                                <div className="serv-title">
                                    <h2>
                                        Strategy & Direction
                                    </h2>
                                </div>
                                <div className="serv-content">
                                    <h5>
                                        Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="serv-card">
                                <div className="serv-title">
                                    <h2>
                                        Design UI/UX
                                    </h2>
                                </div>
                                <div className="serv-content">
                                    <h5>
                                        Websites, applications or other design related tasks. I love tackling digital problems and help fix them.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="serv-card">
                                <div className="serv-title">
                                    <h2>
                                        Mobile App
                                    </h2>
                                </div>
                                <div className="serv-content">
                                    <h5>
                                        It's 2020, we should really step up our mobile game a bit more, right? Open to tackling new mobile projects.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Services
