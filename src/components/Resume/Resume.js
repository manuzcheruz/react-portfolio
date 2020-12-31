import React from 'react'
import Fade from 'react-reveal/Fade'

import './Resume.css'

function Resume(props) {
    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="resume-wrapper">
                <Fade bottom>
                    <h1>Resume</h1>
                </Fade>
                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Work Experience</h2>
                            <div className="block">
                                <h3>Uber</h3>
                                <h4 className="ex-title">Product Designer</h4>
                                <h4 className="ex-content">August 2018 - December 2019</h4>
                            </div>
                            
                            <div className="block">
                                <h3>Apple</h3>
                                <h4 className="ex-title">Product Designer</h4>
                                <h4 className="ex-content">2016 - 2017</h4>
                            </div>
                        </div>
                        <div className="column">
                            <h2>Education</h2>
                            <div className="block">
                                <h3>SUNY Polytechnic Institute</h3>
                                <h4 className="ex-title">MS Information Design & Technology</h4>
                                <h4 className="ex-content">December 2019 - Current</h4>
                            </div>

                            <div className="block">
                                <h3>Florida Gulf Coast University</h3>
                                <h4 className="ex-title">BA Psychology</h4>
                                <h4 className="ex-content">2014 - 2015</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h2>Skills</h2>
                            <div className="row">
                                <div className="column">
                                    <h3>Design</h3>
                                    <h4 className="ex-content">Product Design</h4>
                                    <h4 className="ex-content">UI/UX Design</h4>
                                    <h4 className="ex-content">Visual Design</h4>
                                    <h4 className="ex-content">Wireframing</h4>
                                    <h4 className="ex-content">Prototyping</h4>
                                </div>
                                <div className="column">
                                    <h3>Development</h3>
                                    <h4 className="ex-content">Visual Developement</h4>
                                    <h4 className="ex-content">Webflow Developement</h4>
                                    <h4 className="ex-content">Front-End Developement</h4>
                                    <h4 className="ex-content">HTML5/CSS3</h4>
                                    <h4 className="ex-content">No-Code Solutions</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <h2>Online Courses</h2>
                            <div className="block">
                                <h3>Webflow</h3>
                                <h4 className="ex-content">The freelancer's Journey</h4>
                                <h4 className="ex-content">July 2019 - August 2019</h4>
                            </div>

                            <div className="block">
                                <h3>SuperHi</h3>
                                <h4 className="ex-content">Intro to User Experince Design</h4>
                                <h4 className="ex-content">August 2019 - December 2019</h4>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Tools</h2>
                            <div className="row">
                                <div className="column">
                                    <h4 className="ex-title">Figma</h4>
                                    <h4 className="ex-title">Webflow</h4>
                                    <h4 className="ex-title">Notion</h4>
                                    <h4 className="ex-title">Bravo Studio</h4>
                                    <h4 className="ex-title">Sketch</h4>
                                </div>
                                <div className="column">
                                    <h4 className="ex-title">Whimsical</h4>
                                    <h4 className="ex-title">Adobe XD</h4>
                                    <h4 className="ex-title">After Effects</h4>
                                    <h4 className="ex-title">Photohop</h4>
                                    <h4 className="ex-title">Visual Studio Code</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Resume
