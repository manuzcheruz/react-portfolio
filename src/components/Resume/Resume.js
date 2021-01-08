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
                    <h1>Resume</h1>
                </Fade>

                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Skills</h2>
                            {Skills()}
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Work Experience</h2>
                            {Experience()}
                        </div>
                        <div className="column">
                            <h2 style={{paddingBottom: '30px'}}>Tools</h2>
                            {Tools()}
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Online Courses</h2>
                            {Courses()}
                        </div>
                        <div className="column">
                          <h2>Education</h2>
                            {Education()}
                            <div style={{marginTop: '100px',textAlign: 'left', display: 'grid', gridTemplateColumns: '1fr 2fr', gridTemplateAreas: 'me2 me2-content'}}>
                                <img className="me2" src={me2} style={{height: '200px'}} alt="" />
                                <div className="me2-content" style={{height: '220px', paddingLeft: '40px', paddingTop: '80px', backgroundColor: '#f2f7f7', borderRadius: '50%'}}>
                                    <h2>Got a Project?</h2>
                                    <h1 style={{textDecoration: 'underline'}}>Lets Talk!</h1>
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
