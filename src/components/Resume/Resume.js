import React from 'react'
import Fade from 'react-reveal/Fade'
import { Courses, Education, Experience, Skills, Tools } from './Molecules';

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
                            <h2>Skills</h2>
                            {Skills}
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Work Experience</h2>
                            {Experience}
                        </div>
                        <div className="column">
                            <h2 style={{paddingBottom: '30px'}}>Tools</h2>
                            {Tools}
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className="row">
                        <div className="column">
                          <h2>Education</h2>
                            {Education}
                        </div>
                        <div className="column">
                            <h2>Online Courses</h2>
                            {Courses}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Resume
