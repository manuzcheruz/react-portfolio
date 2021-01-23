import React from 'react'
import Fade from 'react-reveal/Fade'
import { Courses, Education, Experience, Skills, Tools } from './Molecules'

import './Resume.css'

import me2 from '../../Assets/me2.png'

function Resume(props) {
    return (
        <div className="section" id="resume">
        <div className="container">
            <div className="resume-wrapper">
                <Fade bottom>
                    <div className="title">Resume</div>
                </Fade>

                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <div className="subtitle">Skills</div>
                            {Skills()}
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <div className="subtitle">Work Experience</div>
                            {Experience()}
                        </div>
                        <div className="column">
                            <div className="subtitle" style={{paddingBottom: '30px'}}>Tools</div>
                            {Tools()}
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <div className="subtitle">Online Courses</div>
                            {Courses()}
                        </div>
                        <div className="column">
                          <div className="subtitle">Education</div>
                            {Education()}
                            <div className="memoji-box" style={{position: 'relative', backgroundColor: 'blue'}}>
                                <img className="me2" src={me2} alt="" />
                                <div className="me2-content">
                                    <h2>Got a Project?</h2>
                                    <h1>Lets Talk!</h1>
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

export default Resume
